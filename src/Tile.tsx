

/* building base: "sprites/town_temperate/1421-1425/256_0001.png", */
import shortid from 'shortid';
import { Building } from './Building';
import { _TileSystem } from './TileSystem';
import { scheduleIdleWorkLoop, getRandomInt, pad } from './utilities';

export enum TileDirection {
    Northwest = 0,
    Northeast = 1,
    Southwest = 2,
    Southeast = 3
}

export enum CompassDirection {
    North = 4,
    South = 5,
    East = 6,
    West = 7
}

export enum TileSlant {
    NorthwestSoutheast,
    NortheastSouthwest,
    SoutheastNorthwest,
    SouthwestNortheast
}

export const AllDirections = [
    TileDirection.Northeast,
    TileDirection.Northwest,
    TileDirection.Southeast,
    TileDirection.Southwest,
    CompassDirection.North,
    CompassDirection.East,
    CompassDirection.South,
    CompassDirection.West
];
export type TileDirectionBasedValue<T> = { [P in TileDirection]: T; };
export interface TileInterface {
    ground: TileGroundType;
    secondSprite?: string;
    elevation: TileDirectionBasedValue<number>;
    riskLevel?: number;
    building: Building;
}
export type TileSlantBasedValue<T> = { [P in TileSlant]: T } & { noSlope: T };
export type TileGroundType = { [P in TileSlant]: string } & { noSlope: string };

function groundFactory(baseNumber: number, location = "temperate"): TileGroundType {
    return {
        noSlope: `sprites/terrain_${location}/256_${pad(baseNumber, 4)}.png`,
        [TileSlant.NortheastSouthwest]: `sprites/terrain_${location}/256_${pad(baseNumber+8, 4)}.png`,
        [TileSlant.SoutheastNorthwest]: `sprites/terrain_${location}/256_${pad(baseNumber+9, 4)}.png`,
        [TileSlant.SouthwestNortheast]: `sprites/terrain_${location}/256_${pad(baseNumber+10, 4)}.png`,
        [TileSlant.NorthwestSoutheast]: `sprites/terrain_${location}/256_${pad(baseNumber+11, 4)}.png`,
    };
}
export const TileGroundType: { [name: string]: TileGroundType } = {
    Grass: groundFactory(1),
    Dirt1: groundFactory(73),
    Dirt2: groundFactory(49),
    Dirt3: groundFactory(25),
    Rocks: groundFactory(97),
    Water: groundFactory(145),
    Sand: groundFactory(169, "tropic")
}

export function isGroundType<T extends TileGroundType>(val: TileGroundType, type: T): val is T {
    return val.noSlope == type.noSlope;
}


const TILE_GROUND_UPDATE_SPEED = 10000;

export const MAX_PROXIMITY_SEARCH_DISTANCE = 10;
export function calcProximityFromWater(tile: Tile): number {
    if(isGroundType(tile.ground, TileGroundType.Water)) {
        return 0;
    } else {
        
        var proximities = [];
        /* Calculate risk level */
        AllDirections.forEach(direction => {
            var currentTile = tile;
            for(var i = 1; i <= MAX_PROXIMITY_SEARCH_DISTANCE; i++) {
                currentTile = currentTile.getTileInDirection(direction);
                if(currentTile == null)
                    return;
                if(isGroundType(currentTile.ground, TileGroundType.Water)) {
                    proximities.push(i);
                    return;
                }
            }
        });
        let averageProximity;
        if(proximities.length > 0)
            averageProximity = proximities.sort((a, b) => a - b)[0];
        else
            averageProximity = MAX_PROXIMITY_SEARCH_DISTANCE;
        
        return averageProximity;
    }
}

export const riskLevelColors = [
    0x99ff33,
    0xffff00,
    0xff9900,
    0xff0000,
    0x9900ff
];

export const MAX_UNHOUSED_POPULATION = 300;
export class Tile implements TileInterface {
    readonly uniqueId: string;
    private index: number;
    private tileMap: TileMap;
    elevation: TileDirectionBasedValue<number>;
    building: Building;
    riskLevel: number;
    _ground: TileGroundType;
    groundDate: number;
    population: number;
    dead: number;
    set ground(newGround: TileGroundType) {
        this._ground = newGround;
        this.groundDate = Date.now();
        this.tileMap?.tileSystem?.onTileChange(this.index);
    }
    get ground() {
        return this._ground;
    }
    getIndex() {
        return this.index;
    }
    getTileMap() {
        return this.tileMap;
    }
    getRiskLevelColor(): number {
        return riskLevelColors[Math.trunc((this.riskLevel - 1) / 2)];
    }
    doTileUpdate(): boolean {
        if((Date.now()-this.groundDate) >= getRandomInt(TILE_GROUND_UPDATE_SPEED-2000, TILE_GROUND_UPDATE_SPEED+2000)) {
            if(this.ground == TileGroundType.Dirt1) {
                this.ground = TileGroundType.Dirt2;
                return true;
            } else if(this.ground == TileGroundType.Dirt2) {
                this.ground = TileGroundType.Dirt3;
                return true;
            } else if(this.ground == TileGroundType.Dirt3) {
                this.ground = TileGroundType.Grass;
                return true;
            }
        }
        return false;
    }
    raiseWholeTile(delta: number) {
        this.elevation[TileDirection.Northeast] += delta;
        this.elevation[TileDirection.Northwest] += delta;
        this.elevation[TileDirection.Southeast] += delta;
        this.elevation[TileDirection.Southwest] += delta;
    }
    getLowestElevation(): number {
        return Object.values(this.elevation).sort((a, b) => a - b)[0];
    }
    getHighestElevation(): number {
        const arr = Object.values(this.elevation).sort((a, b) => a - b)
        return arr[arr.length - 1];
    }
    getSlantDirection(): TileSlant {
        const neSw = this.elevation[TileDirection.Northeast] - this.elevation[TileDirection.Southwest];
        const nwSe = this.elevation[TileDirection.Northwest] - this.elevation[TileDirection.Southeast];
        if(neSw > 0)
            return TileSlant.NortheastSouthwest;
        else if(neSw < 0)
            return TileSlant.SouthwestNortheast;
        else if(nwSe > 0)
            return TileSlant.NorthwestSoutheast;
        else if(nwSe < 0)
            return TileSlant.SoutheastNorthwest;
        else
            return null;
    }
    setAllElevations(newVal: number) {
        this.elevation[TileDirection.Northeast] = newVal;
        this.elevation[TileDirection.Northwest] = newVal;
        this.elevation[TileDirection.Southeast] = newVal;
        this.elevation[TileDirection.Southwest] = newVal;
    }
    constructor(template: Partial<Omit<Tile, 'uniqueId'>>) {
        /* Initialize defaults */
        this.elevation = {} as any;
        this.setAllElevations(0);
        this.riskLevel = 3;
        this.building = null;
        this.ground = TileGroundType.Grass;
        this.population = 0;
        this.dead = 0;
        /* Override as necessary */
        if(typeof template == 'object' && template != null) {
            let oldTileMap = undefined;
            if(typeof (template as any).tileMap == 'object') {
                oldTileMap = (template as any).tileMap;
                (template as any).tileMap = undefined;
            }
            Object.assign(JSON.parse(JSON.stringify(template)));
            const manualProperties: Array<keyof Tile> = [ "building", "ground" ];
            manualProperties.forEach(prop => {
                if(typeof template[prop] != 'undefined')
                    this[prop as any] = template[prop];
            });
            (template as any).tileMap = oldTileMap;
        }
        /* And override whatever ID we get (since we need unique ids for everything) */
        this.uniqueId = shortid.generate();
        this.tileMap = null;
        this.index = null;
    }
    getGroundSprite(): string {
        /* Ground points to the non-sloped ground type (for backwards compatibility) */
        const slope = this.getSlantDirection();
        if(slope == null)
            return this.ground["noSlope"];
        else
            return this.ground[slope];
    }
    flood() {
        /* Flood */
        this.ground = TileGroundType.Water;
        this.riskLevel = MAX_PROXIMITY_SEARCH_DISTANCE;
        /*
        this.getSurroundingTiles().forEach(tileInDirection => {
            if(tileInDirection.getHighestElevation() <= this.getLowestElevation() && !isGroundType(tileInDirection.ground, TileGroundType.Water)) {
                tileInDirection.flood();
            }
        });
        */
    }
    getSurroundingTiles(): Tile[] {
        var ret = [];
        AllDirections.forEach(dir => {
            const t = this.getTileInDirection(dir);
            if(t != null)
                ret.push(t);
        });
        return ret;
    }
    getAppropriateBaseSprite(): string {
        if(this.building == null || typeof this.building.baseSprite == 'undefined')
            return this.getGroundSprite();
        else
            return this.building.baseSprite;
    }
    getAppropriateMainSprite(): string {
        if(this.building == null)
            return null;
        else if(!this.building.destroyed)
            return this.building.mainSprite;
        else if(typeof this.building.destroyedSprite != 'undefined')
            return this.building.destroyedSprite;
        else
            return this.building.mainSprite;
    }
    getColumn(): number {
        return (this.getIndex() % this.tileMap.rowLength);
    }
    getRow(): number {
        return Math.trunc(this.getIndex() / this.tileMap.rowLength);
    }
    getTileInDirection(direction: TileDirection|CompassDirection): Tile {
        let tile = undefined;
        const column = this.getColumn()
        const row = this.getRow();
        const lastColumn = (this.tileMap.rowLength - 1);
        const lastRow = Math.round(this.tileMap.length / this.tileMap.rowLength);
        if(direction == TileDirection.Northwest) {
            if(row > 0)
                tile = this.tileMap[this.getIndex()-this.tileMap.rowLength];
        } else if(direction == TileDirection.Northeast) {
            if(column < lastColumn)
                tile = this.tileMap[this.getIndex()+1];
        } else if(direction == TileDirection.Southwest) {
            if(column > 0)
                tile = this.tileMap[this.getIndex()-1];
        } else if(direction == TileDirection.Southeast) {
            if(row < lastRow)
                tile = this.tileMap[this.getIndex()+this.tileMap.rowLength];
        } else if(direction == CompassDirection.North) {
            if(column < lastColumn && row > 0)
                tile = this.tileMap[this.getIndex()-this.tileMap.rowLength+1];
        } else if(direction == CompassDirection.East) {
            if(row < lastRow && column < lastColumn)
                tile = this.tileMap[this.getIndex()+this.tileMap.rowLength+1];
        } else if(direction == CompassDirection.West) {
            if(row > 0 && column > 0)
                tile = this.tileMap[this.getIndex()-this.tileMap.rowLength-1];
        } else if(direction == CompassDirection.South) {
            if(column > 0 && row < lastRow)
                tile = this.tileMap[this.getIndex()+this.tileMap.rowLength-1];
        }
        if(typeof tile == 'object')
            return tile;
        else
            return null;
    }
    searchInRing(radius: number, directions: Array<CompassDirection|TileDirection> = AllDirections, filter: (tile: Tile) => boolean = () => true): number[][] {
        var rings: number[][] = [];
        var neededLength = radius;
        const allProcessedIndexes = new Set<number>();
        const processTile = (t: Tile) => {
            if(t == null)
                return null;
            
            const i = t.getIndex();
            
            if(allProcessedIndexes.has(i))
                return null;
                
            allProcessedIndexes.add(i);
            
            let allWereNull = true;
            var thisRing: number[] = [];
            var tilesToReturn: Tile[] = [];
            directions.forEach(dir => {
                const tid = t.getTileInDirection(dir);
                if(tid != null) {
                    allWereNull = false;
                    if(filter(tid))
                        thisRing.push(tid.getIndex());
                    tilesToReturn.push(tid);
                }
            });
            rings.push(thisRing);
            if(rings.length == neededLength || allWereNull) {
                throw { finished: true };
            }
            return tilesToReturn;
        };
        var nextTiles = [ this ];
        if(filter(this)) {
            rings.push([ this.getIndex() ]);
            neededLength++;
        }
        try {
            while(nextTiles != null) {
                var nextNextTiles = [];
                nextTiles.forEach((tile) => {
                    const nt = processTile(tile);
                    if(nt != null)
                        nextNextTiles = nextNextTiles.concat(nt);
                })
                if(nextNextTiles.length == 0)
                    nextTiles = null;
                else
                    nextTiles = nextNextTiles;
            }
        } catch(e) {
            if(e.finished != true)
                console.error(e);
        }
        return rings;
    }
}

export class TileMap extends Array<Tile> {
    pauseUpdates: boolean;
    tileSystem: _TileSystem;
    rowLength: number;
    constructor(tiles: Tile[], rowLength?: number, isStatic = false) {
        super(...tiles);
        Object.setPrototypeOf(this, TileMap.prototype);
        if(typeof rowLength != 'number')
            rowLength = Math.sqrt(this.length);
        this.rowLength = Math.round(rowLength);
        this.pauseUpdates = isStatic;
        this.relinkTiles(isStatic);
        if(!isStatic) {
            this.runUpdates = this.runUpdates.bind(this);
            this.runUpdates();
        }
    }
    getRows() {
        return Math.round(this.length / this.rowLength);
    }
    createStaticVersion(): TileMap {
        const tileArray = [];
        this.forEach((tile, index) => {
            tileArray[index] = new Tile(tile);
            tileArray[index].uniqueId = tile.uniqueId;
        });
        return new TileMap(tileArray, this.rowLength, true);
    }
    runUpdates() {
        var p: Promise<void>;
        if(!this.pauseUpdates) {
            p = scheduleIdleWorkLoop(this.length, i => {
                if(this[i].doTileUpdate()) {
                    this.tileSystem.updateTile(i);
                }
            });
        } else
            p = Promise.resolve();
        p.then(() => setTimeout(this.runUpdates, 2000));
    }
    relinkTiles(isStatic = false) {
        this.forEach((tile, index) => {
            (tile as any).index = index;
            if(!isStatic)
                (tile as any).tileMap = this;
        });
    }
    takeCensus(): { unhoused: number; housed: number; dead: number; } {
        let population = { unhoused: 0, housed: 0, dead: 0 };
        this.forEach(tile => {
            population.unhoused += tile.population;
            population.dead += tile.dead;
            if(tile.building != null)
                population.housed += tile.building.residents;
        });
        return population;
    }
}

const overlayTextures: TileSlantBasedValue<string> = {
    [TileSlant.NorthwestSoutheast]: "sprites/whole_tile_overlays/256m_0012.png",
    [TileSlant.SoutheastNorthwest]: "sprites/whole_tile_overlays/256m_0010.png",
    [TileSlant.NortheastSouthwest]: "sprites/whole_tile_overlays/256m_0009.png",
    [TileSlant.SouthwestNortheast]: "sprites/whole_tile_overlays/256m_0011.png",
    noSlope: "sprites/whole_tile_overlays/256m_0001.png"
};
export { overlayTextures };