import React from 'react';
import { buildings, Building, Buildable } from './Building';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { BlueHouseIcon, PurpleInfoIcon, HammerIcon } from './Icons';
import Button from '@material-ui/core/Button';
import { ConstructionType } from './Construction';
import ConstructionOptionImage from './ConstructionOptionImage';
import { Tile } from './Tile';

const ConstructionBuildingInfo: React.StatelessComponent<Buildable> = (props) => {
    let occupancy = undefined;
    if(typeof (props as Building).occupancy != 'undefined') {
        occupancy = <><BlueHouseIcon/>&nbsp;{(props as Building).occupancy}</>;
    }
    
    return <div className="construction-building-info">
        <Typography variant="h6">{props.name}</Typography>
        <span>
            {occupancy}
        </span>

    </div>;
};

type OnChooseItem = (item: Buildable) => void;

const ConstructionOption: React.StatelessComponent<{
    onChooseItem: OnChooseItem;
    buildable: Buildable;
    targetTile: Tile;
}> = (props) => {
    const [ infoShown, setInfoShown ] = React.useState(false);
    const building = props.buildable as Building; /* FIXME */
    const onChooseItem = React.useMemo(() => props.onChooseItem.bind(props, building), [ props.onChooseItem, props.buildable ]);
    const triggerDialogClose = React.useCallback(() => setInfoShown(false), []);
    const triggerDialogOpen = React.useCallback(() => setInfoShown(true), []);
    let extraDescription = undefined;
    if(typeof building.description != 'undefined') {
        extraDescription = <button onClick={triggerDialogOpen}><PurpleInfoIcon/></button>;
    }
    const baseSprite = typeof building.baseSprite != 'undefined' ? building.baseSprite : props.targetTile?.getGroundSprite();
    return <ListItem>
        <ConstructionOptionImage mainSprite={building.mainSprite} baseSprite={baseSprite} leftColor={props.targetTile?.leftColor} rightColor={props.targetTile?.rightColor}/>
        <ConstructionBuildingInfo {...building}/>
        <span className="construction-item-buttons">
            <span className="construction-item-buttons-spacer"></span>
            {extraDescription}
            <button onClick={onChooseItem}><HammerIcon/></button>
        </span>
        {typeof building.description != 'undefined' && <Dialog open={infoShown} onClose={triggerDialogClose}>
            <DialogTitle>{building.name}</DialogTitle>
            <DialogContent dividers>
                <Typography>{building.description}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={triggerDialogClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>}
    </ListItem>;
};

const ConstructionBuildOptions: React.StatelessComponent<{ type: ConstructionType; onChooseItem: OnChooseItem; targetTile: Tile; }> = (props) => {
    return <List className="construction-build-options">
        {buildings.map((building) => building.hidden ? null : <ConstructionOption key={building.mainSprite}
            onChooseItem={props.onChooseItem} targetTile={props.targetTile} buildable={building}/>)}
    </List>;
};

export default ConstructionBuildOptions;