import React from 'react';

const ConstructionOptionImage: React.FunctionComponent<{ mainSprite?: string; baseSprite?: string; leftColor?: number; rightColor?: number; }> = (props) => {
    let leftColor = undefined, rightColor = undefined;
    if(typeof props.leftColor != 'undefined') {
        leftColor = "#" + props.leftColor.toString(16);
        rightColor = "#" + props.rightColor.toString(16);
    }
    return <div className={`construction-avatar-container ${props.mainSprite ? "" : "no-mainsprite "}selectDisable`}>
        {props.mainSprite && <img src={props.mainSprite} className="construction-mainsprite selectDisable"/>}
        {props.baseSprite && <img src={props.baseSprite} className="construction-basesprite selectDisable"/>}
        {leftColor && <div className="construction-avatar-side construction-avatar-leftside selectDisable" style={{backgroundColor: leftColor}}></div>}
        {rightColor && <div className="construction-avatar-side construction-avatar-rightside selectDisable" style={{backgroundColor: rightColor}}></div>}
    </div>;
};
export default ConstructionOptionImage;