import { Tile } from './Tile';

export enum DisasterType {
    Tsunami    
}


export interface DisasterInfo {
    icon: string;
}
const disasters: {
    [P in DisasterType]: DisasterInfo;
} = {
    [DisasterType.Tsunami]: {
        icon: "sprites/disaster_icons/tsunami.svg"
    }
};


export { disasters };