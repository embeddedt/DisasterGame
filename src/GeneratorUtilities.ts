import { Tile } from './Tile';
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
        t.building = JSON.parse(JSON.stringify(getRandomArrayMember(buildings)));
        t.building.residents = t.building.occupancy;
        skipUnhoused = true;
    }
    if(chances >= 8 && chances < 16)
        skipUnhoused = true;
    if(!skipUnhoused) {
        t.population = getRandomInt(10, 20);
    }
}