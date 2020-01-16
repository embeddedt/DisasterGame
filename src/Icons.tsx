import React from 'react';

export interface FontAwesomeIconProps {
    type: string;
    color?: string;
}
const FontAwesomeIcon = React.forwardRef<HTMLElement, FontAwesomeIconProps>((props, ref) => {
    return <i className={`fas fa-${props.type}`} style={{ color: props.color }} ref={ref}></i>;
});

function iconFactory(type: string, color?: string) {
    return React.forwardRef<HTMLElement>((p, ref) => <FontAwesomeIcon type={type} color={color} ref={ref} {...p}/>);
}
function imageIconFactory(src: string) {
    return React.forwardRef<HTMLImageElement>((p, ref) => <img className="disaster-image-icon" src={src} ref={ref} {...p}/>);
}

const GreenSecurityIcon = iconFactory("shield-alt", "#3bcc62");
const BlueHouseIcon = iconFactory("home", "#3d94ff");
const PurpleInfoIcon = iconFactory("info-circle", "#b65bfc");
const RedBombIcon = iconFactory("bomb", "#777");
const TerraformUpIcon = iconFactory("arrow-up", "#009933");
const TerraformDownIcon = iconFactory("arrow-down", "#009933");
const WaterIcon = iconFactory("water", "#00ccff");
const LandIcon = iconFactory("mountain", "#00cc00");
const PauseIcon = iconFactory("pause", "#0099ff");
const RiskLevelButtonIcon = imageIconFactory("sprites/gui/risk_level_btn.png");
const BuildingIcon = iconFactory("building", "#996633");
const SaveIcon = iconFactory("save", "#0066ff");
const BackIcon = iconFactory("chevron-left", "#0066ff");
const HammerIcon = iconFactory("hammer", "#996633");
const UnhousedPersonIcon = iconFactory("male", "#ff0000");
const EvacuationIcon = iconFactory("helicopter", "#ff9933");
const SkullIcon = iconFactory("skull", "#bbb");
const HelpIcon = iconFactory("question", "#0099ff");
const StartDisasterIcon = iconFactory("exclamation-triangle", "#cc2900");

export {
    GreenSecurityIcon, BlueHouseIcon, FontAwesomeIcon, PurpleInfoIcon, RedBombIcon,
    TerraformUpIcon, TerraformDownIcon, WaterIcon, LandIcon, PauseIcon, RiskLevelButtonIcon,
    BuildingIcon, SaveIcon, BackIcon, HammerIcon, UnhousedPersonIcon, EvacuationIcon,
    SkullIcon, HelpIcon, StartDisasterIcon
};