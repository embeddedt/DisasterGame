

import React from 'react';
import { GreenSecurityIcon, BlueHouseIcon, PurpleInfoIcon, FontAwesomeIcon, RedBombIcon, TerraformUpIcon, TerraformDownIcon, WaterIcon, LandIcon, UnhousedPersonIcon, SkullIcon } from './Icons';

import { ConstructionType } from './Construction';
import { Tile, TileGroundType, riskLevelColors } from './Tile';

interface BuildButtonProps {
    onClick?: (type: ConstructionType) => void;
    constructionType?: ConstructionType;
    icon: any;
}
const BuildButton: React.StatelessComponent<BuildButtonProps> = (props) => {
    const { icon, onClick, constructionType, ...rest } = props;
    const IconComponent = icon;
    const internalOnClick = React.useCallback(() => {
        if(typeof onClick == 'function')
            onClick(constructionType);
    }, [ constructionType ]);
    return <button className="hoverable-button build-button" onClick={internalOnClick} {...rest}><IconComponent/></button>;
};


interface TileOverlayProps {
    name: string;
    isSelected: boolean;
    style?: React.CSSProperties;
    show: boolean;
    constructionMode?: boolean;
    riskColor: number;
    riskLevel: number;
    embed?: boolean;
    residents: number;
    occupancy: number;
    unhoused: number;
    dead: number;
}

/*<div className="tile-overlay-clipper">
            <div className={`tile-overlay-wrapper tile-overlay-${props.isSelected ? "selected" : "unselected"}`}>*/
const TileOverlay = React.forwardRef<HTMLDivElement, TileOverlayProps>((props, ref) => {
    if(!props.show || props.name == undefined)
        return null;
    const riskColor = props.riskColor.toString(16);
    let residencyComponent;
    if(typeof props.residents != 'undefined' && props.occupancy > 0) {
        residencyComponent = <>&nbsp;<span><BlueHouseIcon/>&nbsp;{`${props.residents}/${props.occupancy}`}</span></>;
    }
    let deadComponent;
    if(props.dead > 0)
        deadComponent = <>&nbsp;<span><SkullIcon/>&nbsp;{props.dead}</span></>;
    return  <div className={`tile-overlay-container tile-overlay-${props.isSelected ? "selected" : "unselected"} ${props.embed ? "tile-overlay-embed" : ""}`} ref={ref} style={props.style}>
        <div className="tile-risk-level-text" style={{ backgroundColor: `#${riskColor}`} }>{props.riskLevel}</div>
        <div className="tile-info-container">
            {props.name}
            <p></p>
            <span className="icon-information"><span><FontAwesomeIcon type="exclamation-triangle" color="#fccf03"/>&nbsp;{"100%"}</span>&nbsp;<span><UnhousedPersonIcon/>&nbsp;{props.unhoused}</span>{residencyComponent}{deadComponent}</span>
        </div>
    </div>;
    /*</div>
        </div>
        {props.isSelected && <div className={`modal-backdrop ${!props.isSelected ? "modal-backdrop-clear" : "modal-backdrop-translucent"}`} onClick={onClickAway}></div>}*/
});
export default TileOverlay;