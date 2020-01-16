import { Tile, isGroundType, TileGroundType, calcProximityFromWater, MAX_PROXIMITY_SEARCH_DISTANCE } from './Tile';
import { getRandomArrayMember, getRandomInt } from './utilities';
import { trees, buildings } from './Building'; 
export function genBuildings(t: Tile) {
    const chances = getRandomInt(0, 32);
    let skipUnhoused = false;
    if(chances >= 16) {
        t.building = JSON.parse(JSON.stringify(getRandomArrayMember(trees)));
        if(chances >= 24)
            skipUnhoused = true;
    } else if(chances == 1) {
        t.population = 0;
        t.building = JSON.parse(JSON.stringify(getRandomArrayMember(buildings, 1)));
        t.building.residents = t.building.occupancy;
        skipUnhoused = true;
    }
    if(chances < 16)
        skipUnhoused = true;
    if(!skipUnhoused) {
        if(getRandomInt(1, 10) == 1) {
            t.population = getRandomInt(2, 4);
            const tilemap = t.getTileMap();
            t.searchInRing(3).flat(2).forEach(n => {
                if(!isGroundType(tilemap[n].ground, TileGroundType.Water)) {
                    /* People like beaches */
                    let beachFactor = 1;
                    beachFactor += Math.round((MAX_PROXIMITY_SEARCH_DISTANCE-tilemap[n].cachedProximityFromWater)/3);
                    tilemap[n].population += beachFactor;
                }
            });
        }
    }
}