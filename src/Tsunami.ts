import { genBuildings } from './GeneratorUtilities';
import { TileMap, Tile, TileGroundType, calcProximityFromWater, MAX_PROXIMITY_SEARCH_DISTANCE } from './Tile';
import { getRandomArbitrary, scheduleIdleWorkLoop } from './utilities';
export async function createTsunamiMap(): Promise<TileMap> {
    function* tsunamiGen() {
        for(var i = 0; i < 64*16; i++) {
            var row = Math.trunc(i / 64);
            var column = (i % 64);
            const t = new Tile({
                ground: TileGroundType.Grass
            });
    
            let variation = getRandomArbitrary(-0.2, 0.2);
            let rowElevation = (16-row)*0.4;
            if(column >= 32) {
                var columnPushUp = (Math.max(16-(column-32), 0) * 0.2);
                var columnRequestedElevation = ((column-32)*0.2) + columnPushUp + (row*-0.1*columnPushUp);
                t.setAllElevations(columnRequestedElevation+variation);
            } else {
                rowElevation = Math.max(rowElevation - (column)*0.1, 0);
                t.setAllElevations(rowElevation+variation);
            }
            yield t;
        }
        for(var i = 0; i < 64*16; i++) {
            var groundType;
            var row = Math.trunc(i / 64);
            var column = (i % 64);
            var coastIndex = column - (32+row);
            if(coastIndex >= 0)
                groundType = TileGroundType.Grass;
            else
                groundType = TileGroundType.Water;
            const t = new Tile({
                ground: groundType
            });
            let variation = getRandomArbitrary(-0.2, 0.2);
            if(groundType == TileGroundType.Water)
                t.setAllElevations(getRandomArbitrary(-1.0, -0.5));
            else {
                var rowRequestedElevation = 6.25;
                var columnRequestedElevation = (coastIndex*0.2);
                t.setAllElevations(Math.min(rowRequestedElevation, columnRequestedElevation)+variation);
            }
    
            yield t;
        }
    }
    var arr = [];
    var tileStream = tsunamiGen();
    await scheduleIdleWorkLoop(64*32, () => {
        arr.push(tileStream.next().value);
    }, 16);
    const testTileMap: TileMap = new TileMap(arr, 64);
    await scheduleIdleWorkLoop(64*32, (i) => {
        const tile = testTileMap[i];
        const prox = calcProximityFromWater(tile);
        tile.cachedProximityFromWater = prox;
        tile.riskLevel = Math.max(1, MAX_PROXIMITY_SEARCH_DISTANCE - prox) + Math.max(0, (3-Math.round(tile.getHighestElevation())));
        tile.riskLevel = Math.min(tile.riskLevel, MAX_PROXIMITY_SEARCH_DISTANCE);
        if(prox < 3 && tile.ground != TileGroundType.Water) {
            tile.ground = TileGroundType.Sand;
        }
    });
    await scheduleIdleWorkLoop(64*32, (i) => {
        const tile = testTileMap[i];
        if(tile.ground != TileGroundType.Water)
            genBuildings(tile);
    });
    return testTileMap;   
}