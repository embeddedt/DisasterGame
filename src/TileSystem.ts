/// <reference path="customtypes.d.ts"/>

import { TileMap, Tile, MAX_UNHOUSED_POPULATION } from './Tile';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';
import { buildings } from './Building';
import TileSprite from './TileSprite';
import TileContainer from './TileContainer';
import { pad, scheduleIdleWorkLoop } from './utilities';
import RenderController from './RenderController';
import { ConstructionType } from './Construction';

const TILE_SIZE = 1;
const TILE_MARGIN = 0;
const TILE_WHOLE = TILE_SIZE + TILE_MARGIN;

export type SharedTileSystemState = Partial<{
    hoverX: number;
    hoverY: number;
    currentlyHoveredTile: Tile;
    currentlySelectedTile: Tile;
    disasterFinished: boolean;
    constructionType: ConstructionType;
    initiallyRendered: boolean;
    willNeedToCull: boolean;
    interactionAllowed: boolean;
    tileRiskLevelVisible: boolean;
    stickyActionInProgress: boolean;
    constructionFlag: any;
    showError: boolean;
    errString: string;
    disasterRunning: boolean;
    expiryDate: number;
    forcedQueryTile: Tile;
    showForcedQuery: boolean;
    newspaperClosed: boolean;
    instructionsHidden: boolean;
}>;

class _TileSystem {
    public readonly plugins = [ 'drag', 'pinch', 'wheel', 'mouseEdges' ];
    app: PIXI.Application;
    rootObject: Viewport;
    previousHoveredObject: TileContainer = null;
    private _interactionAllowed: boolean = false;
    get interactionAllowed() {
        return this._interactionAllowed;
    }
    set interactionAllowed(newVal: boolean) {
        this._interactionAllowed = newVal;
        this.onHoverOutTile(null);
        this.clearSelectedTile(null);
        this.rootObject.emit("disaster-hover", {
            interactionAllowed: this._interactionAllowed
        });
        if(this.tileObjects != null)
            this.tileObjects.forEach(object => object.tileObject.base.cursor = newVal ? "pointer" : "default");
    }
    loadedSprites: string[] = [];
    tileObjects: TileContainer[] = [];
    tileSize: number;
    topLevelOrderChanged: boolean = true;
   /* buildingAlphaFilter = new PIXI.filters.AlphaFilter(0.5);*/
    lastTileMap: TileMap = null;
    lastRowLength: number = 0;
    currentlyHoveredTile: number = -1;
    currentlySelectedTile: number = -1;
    isPinching: boolean;
    set tileRiskLevelVisible(visible: boolean) {
        this.tileObjects.forEach(obj => obj.tileRiskLevel.visible = visible);
        this.rootObject.emit("disaster-hover", {
            tileRiskLevelVisible: visible
        });
    }
    get tileRiskLevelVisible() {
        if(typeof this.tileObjects[0] != 'undefined')
            return this.tileObjects[0].tileRiskLevel.visible;
        else
            return false;
    }
    explosionSprites = (function(){
        var arr = [];
        for(var i = 1; i <= 16; i++) {
            arr.push(`sprites/dynamite/256_00${pad(i, 2)}.png`)
        }
        return arr;
    }());
    loadedExplosionTextures: PIXI.Texture[];
    constructor(public stateHolder: { state: Required<SharedTileSystemState>; onTileChange?: (index: number) => void; }) {
        this.onPickTile = this.onPickTile.bind(this);
        this.onHoverInTile = this.onHoverInTile.bind(this);
        this.onHoverOutTile = this.onHoverOutTile.bind(this);
        this.onHoverMoveTile = this.onHoverMoveTile.bind(this);
        this.updateTile = this.updateTile.bind(this);
        this.getTexture = this.getTexture.bind(this);
        this.isPinching = false;
    }
    onTileChange(index: number) {
        if(typeof this.stateHolder.onTileChange == 'function')
            this.stateHolder.onTileChange(index);
    }
    static getTileIndex(tile: PIXI.DisplayObject): number {
        if(typeof (tile as any).disasterGameIndex != 'number')
            throw new Error("Not a tile-based object");
        return (tile as any).disasterGameIndex;
    }
    isDragging(): boolean {
        return (this.rootObject.plugins.get('drag') as any).active || (this.rootObject.plugins.get('pinch') as any).active || this.isPinching;
    }
    shouldIgnoreTileInteraction() {
        return this.isDragging() || this.currentlySelectedTile != -1 || !this.interactionAllowed || (typeof window.event != 'undefined' && (window.event as any).disasterIgnore == true);
    }
    clearSelectedTile(evt?: PIXI.interaction.InteractionEvent) {
        if(this.currentlySelectedTile == -1)
            return;
        if(this.currentlyHoveredTile != this.currentlySelectedTile) {
            /* No longer hovering over the previously selected tile... hide its outline */
            this.tileObjects[this.currentlySelectedTile].hoverVisible = false;
            if(this.currentlyHoveredTile != -1) {
                /* Show the new tile's outline */
                this.tileObjects[this.currentlyHoveredTile].hoverVisible = true;
            }
            RenderController.queueRender();
        }
        this.currentlySelectedTile = -1;
        if(this.currentlyHoveredTile != -1 && typeof evt == 'object') {
            this.onHoverMoveTile(evt);
        }
        this.rootObject.emit("disaster-hover", {
            currentlySelectedTile: null
        });
    }
    onPickTile(evt: PIXI.interaction.InteractionEvent) {
        if(this.shouldIgnoreTileInteraction() || (evt.data.originalEvent as any).disasterIgnore == true)
            return;
        
        //this.currentlySelectedTile = this.currentlyHoveredTile;
        //this.plugins.forEach((plugin) =>  this.rootObject.plugins.pause(plugin));
        this.rootObject.emit("disaster-tilepicked", {
            currentlySelectedTile: this.lastTileMap[_TileSystem.getTileIndex(evt.target as TileContainer)]
        } as SharedTileSystemState);
        (evt as any).doIgnoreTileClick = true;
        RenderController.queueRender();
    }
    static retrieveEventCoords(e: MouseEvent | TouchEvent | PointerEvent): { x: number; y: number; } {
        if(typeof (e as any).clientX != 'undefined') {
            const m = (e as MouseEvent|PointerEvent);
            return { x: m.clientX, y: m.clientY };
        } else if(typeof (e as TouchEvent).touches != 'undefined') {
            const t = e as TouchEvent;
            return { x: t.touches[0].clientX, y: t.touches[0].clientY };
        } else {
            console.error("Unexpected event type");
            return { x: 0, y: 0 };
        }
    }
    clearPreviousHover() {
        if(this.previousHoveredObject != null) {
            this.previousHoveredObject.hoverVisible = false;
            this.previousHoveredObject = null;
        }
    }
    onHoverInTile(evt: { target: PIXI.DisplayObject; data?: { originalEvent: MouseEvent | TouchEvent | PointerEvent; } }) {
        const tile: TileContainer = evt.target as TileContainer;
        
        this.currentlyHoveredTile = _TileSystem.getTileIndex(tile);
        
        if(!this.shouldIgnoreTileInteraction()) {
            this.clearPreviousHover();
            this.tileObjects[this.currentlyHoveredTile].hoverVisible = true;
            this.previousHoveredObject = this.tileObjects[this.currentlyHoveredTile];
            RenderController.queueRender();
        }
        /* Emit event */
        if(typeof evt.data != 'undefined' && this.lastTileMap != null) {
            const coords = _TileSystem.retrieveEventCoords(evt.data.originalEvent);
            if(this.interactionAllowed)
                this.rootObject.emit("disaster-hover", {
                    hoverX: coords.x,
                    hoverY: coords.y,
                    currentlyHoveredTile: this.lastTileMap[this.currentlyHoveredTile]
                } as SharedTileSystemState);
        }
        
    }
    onHoverMoveTile(evt: PIXI.interaction.InteractionEvent) {
        if(this.currentlyHoveredTile == -1 || this.currentlySelectedTile != -1 || !this.interactionAllowed)
            return;
        const coords = _TileSystem.retrieveEventCoords(evt.data.originalEvent);
        
        this.rootObject.emit("disaster-hover", {
            hoverX: coords.x,
            hoverY: coords.y,
            currentlyHoveredTile: this.lastTileMap[this.currentlyHoveredTile]
        } as SharedTileSystemState);
    }
    onHoverOutTile(evt: PIXI.interaction.InteractionEvent) {
        if(this.isDragging())
            return;
        if(typeof this.tileObjects[this.currentlyHoveredTile] != 'undefined' && this.currentlyHoveredTile != this.currentlySelectedTile) {
            this.clearPreviousHover();
            this.tileObjects[this.currentlyHoveredTile].hoverVisible = false;
            RenderController.queueRender();
        }
        this.currentlyHoveredTile = -1;
        
        if(evt != null) {
            if(this.interactionAllowed)
                this.rootObject.emit("disaster-hover", {
                    hoverX: 0,
                    hoverY: 0,
                    currentlyHoveredTile: null
                } as SharedTileSystemState);
        }
        
    }
    setupObjects() {
        this.loadedExplosionTextures = this.explosionSprites.map(sprite => this.getTexture(sprite));

        this.onHoverOutTile(null);
        this.rootObject.on("zoomed-end", () => {
            RenderController.queueRender();
        });
        this.rootObject.on("pinch-start", () => this.isPinching = true);
        this.rootObject.on("pinch-end", () => {
            this.isPinching = false;
            (window.event as any).disasterIgnore = true;
        });
        this.rootObject.on("pointerup", () => {
            /* Force reset the silly plugin */
            (this.rootObject.plugins.get('drag') as any).moved = false;
        });
        this.rootObject.on("mouseout", this.onHoverOutTile);
    }
    onResize(): Promise<PIXI.Point> {
        if(this.lastTileMap != null)
            return this.updateTileObjects(this.lastTileMap, this.lastRowLength);
        else
            return Promise.resolve(null);
    }
    static getTilePositionInformation(logicalChildNumber: number, totalRows: number, squareFactor: number, x_offset = TILE_WHOLE, z_offset = 0): { x: number; y: number; z: number; } {

        let y_pos = logicalChildNumber == 5 ? -0.2 : 0;

        const type = (logicalChildNumber % squareFactor) + 1;

        const loops = Math.trunc(logicalChildNumber / squareFactor);
        const x_pos = x_offset + ((type-1) * TILE_WHOLE);
        const z_pos = z_offset + totalRows - (((loops * TILE_WHOLE)));
        return { x: x_pos, y: y_pos, z: z_pos };
    }
    handleTextureResize(sprite: PIXI.Sprite) {
        sprite.width = this.tileSize;
        sprite.scale.y = sprite.scale.x;
    }
    getSquareFactor(): number {
        return this.lastTileMap.rowLength;
    }
    updateTile(i: number) {
        if(i < 0 || i >= this.lastTileMap.length)
            throw new Error("Unexpected index");
        const squareFactor = this.getSquareFactor();
        const loops = Math.trunc(i / squareFactor);

        const column = (i - (loops*squareFactor));
        
        const left_em = (0.5 * (column)) + (0.5 * (loops));
        const top_em = (-0.25 * (column)) + (0.25 * (loops)) + (-this.lastTileMap[i].getLowestElevation() / 4);

        const zOffset = ((loops*squareFactor)+(squareFactor-column))*2;
        
        if(this.tileObjects[i] == undefined) {
            this.tileObjects[i] = new TileContainer(i, this.getTexture, this.loadedExplosionTextures);
            this.tileObjects[i].name = "tile" + i;
            this.tileObjects[i].interactive = true;
            this.tileObjects[i].on("pick", this.onPickTile);
            this.tileObjects[i].on("hoverin", this.onHoverInTile);
            this.tileObjects[i].on("hoverout", this.onHoverOutTile);
            this.tileObjects[i].on("hovermove", this.onHoverMoveTile);
            this.tileObjects[i].zIndex = 0+zOffset;
            this.tileObjects[i].tileRiskLevel.visible = false;
            this.rootObject.addChild(this.tileObjects[i]);
            this.topLevelOrderChanged = true;
        }
        this.tileObjects[i].numPeople = Math.ceil(this.lastTileMap[i].population);

        /* DRAW TILE BASE */

        this.tileObjects[i].tileSize = this.tileSize;
        
        this.tileObjects[i].slant = this.lastTileMap[i].getSlantDirection();
        
        this.tileObjects[i].tileObject.texture = this.getTexture(this.lastTileMap[i].getGroundSprite());
        this.tileObjects[i].tileObject.texture = this.getTexture(this.lastTileMap[i].getAppropriateBaseSprite());
        this.tileObjects[i].tileSideHue = (this.getTexture(this.lastTileMap[i].getGroundSprite()).baseTexture as any).averageHue;
        this.lastTileMap[i].leftColor = this.tileObjects[i].leftColor;
        this.lastTileMap[i].rightColor = this.tileObjects[i].rightColor;
        this.tileObjects[i].tileRiskLevel.base.tint = this.lastTileMap[i].getRiskLevelColor();
        
        this.tileObjects[i].x = left_em * this.tileSize;
        this.tileObjects[i].y = (top_em+1) * this.tileSize;

        const main = this.lastTileMap[i].getAppropriateMainSprite();
        this.tileObjects[i].tileBuildingObject.texture = this.getTexture(main);
        
        
        if(i == this.currentlyHoveredTile) {
            this.onHoverOutTile(null);
            this.onHoverInTile({ target: this.tileObjects[i] });
        }
        RenderController.queueRender();
    }
    getTexture(textureName: string): PIXI.Texture {
        if(textureName == null)
            return PIXI.Texture.EMPTY;
        const resource = this.app.loader.resources[textureName];
        if(resource != undefined)
            return resource.texture;
        else
            return PIXI.Texture.EMPTY;
    }
    getCentralPoint(): PIXI.Point {
        const idx = Math.round(((this.lastTileMap.getRows() / 2) * this.lastTileMap.rowLength)  + (this.lastTileMap.rowLength / 2));
        const central = this.tileObjects[idx];
        return new PIXI.Point(central.x, central.y);
    }
    updateTileObjects(tilemap: TileMap, rowLength?: number): Promise<PIXI.Point> {
        return new Promise((resolve, reject) => {
            this.lastTileMap = tilemap;
            this.lastTileMap.tileSystem = this;
            this.lastRowLength = rowLength;
            const p = scheduleIdleWorkLoop(tilemap.length, this.updateTile, 20);
            p.then(() => {
                if(this.topLevelOrderChanged) {
                    this.rootObject.sortChildren();
                    this.topLevelOrderChanged = false;
                }
                
                resolve(this.getCentralPoint());
            });
            p.catch(reject);
        });
        
    }
}

export { _TileSystem };