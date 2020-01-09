
import React from 'react';
import { TileMap, Tile } from './Tile';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { disasters, DisasterType } from './Disaster';
import DisasterIcon from './DisasterIcon';
//import ReactFileReader from 'react-file-reader';
import { StaticTileMap } from './TileMapSaver';

export interface TileMapInfo {
    name: string;
    mapGenerator: () => Promise<TileMap>;
    disaster: DisasterType;
}

interface MapChooserProps {
    availableMaps: TileMapInfo[];
    onMapChosen: (map: () => Promise<TileMap>) => void;
    show: boolean;
}

const MapChooserItem: React.FunctionComponent<{ mapInfo: TileMapInfo; onMapChosen: (map: () => Promise<TileMap>) => void }> = (props) => {
    const onClick = React.useCallback(() => {
        props.onMapChosen(props.mapInfo.mapGenerator);
    }, [ props.onMapChosen, props.mapInfo ]);
    return <ListItem button onClick={onClick}>
        <ListItemAvatar>
            <DisasterIcon icon={disasters[props.mapInfo.disaster].icon}/>
        </ListItemAvatar>
        <ListItemText disableTypography>
            <Typography variant="subtitle1">{props.mapInfo.name}</Typography>
        </ListItemText>
    </ListItem>;
};

const MapChooser: React.FunctionComponent<MapChooserProps> = (props) => {
    const loadCustomMap = React.useCallback((files: FileList) => {
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            const json: StaticTileMap = JSON.parse(contents as string);
            json.tiles = json.tiles.map(tile => new Tile(tile));
            var tileMap = new TileMap(json.tiles, json.rowLength);
            props.onMapChosen(() => Promise.resolve(tileMap));
        };
        reader.onerror = function() {
            window.alert("Unable to load file");
        };
        reader.readAsText(files[0]);
    }, [ props.onMapChosen ]);
    return <Dialog open={props.show}>
        <DialogTitle>Choose a scenario</DialogTitle>
        <List className="map-chooser-list">
            {props.availableMaps.map((mapInfo, index) => <MapChooserItem key={index} mapInfo={mapInfo} onMapChosen={props.onMapChosen}/>)}
            {/*<ReactFileReader multipleFiles={false} handleFiles={loadCustomMap} fileTypes={[ ".json" ]}>
                <ListItem button>
                    <ListItemText disableTypography>
                        <Typography variant="subtitle1">Load a custom map</Typography>
                    </ListItemText>
                </ListItem>
            </ReactFileReader>*/}
        </List>
    </Dialog>;
}
import(/* webpackPrefetch: true */ './PIXIContainer');
export default MapChooser;