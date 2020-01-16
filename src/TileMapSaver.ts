
import { TileMap, Tile } from './Tile';
import { saveAs } from 'file-saver';

export interface StaticTileMap {
    tiles: Array<Tile>;
    rowLength: number;
}

export function saveMap(tileMap: TileMap): StaticTileMap {
    const s = tileMap.createStaticVersion();
    const staticObj = { tiles: s, rowLength: tileMap.rowLength };
    const json = JSON.stringify(staticObj, null, 4);
    var blob = new Blob([json], {type: "application/json"});
    saveAs(blob, "map.json");
    return staticObj as StaticTileMap;
}