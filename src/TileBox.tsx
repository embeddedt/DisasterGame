
import React from 'react';
export interface TileBoxProps {
    scale?: string|number;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onHoverIn?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onHoverOut?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
    type: string;
    ringColor?: string;
    className?: string;
}
const TileBox = React.forwardRef<HTMLDivElement, TileBoxProps>((props, ref) => {
    let { scale, className } = props;
    if(typeof scale == 'undefined')
        scale = '1';
    if(typeof className == 'undefined')
        className = '';
    const divStyle = {
        transform: `translateX(0.45em) translateY(1.2em) rotateX(-60deg) rotateZ(45deg) scale(${scale})`,
        borderColor: props.ringColor
    };
    return <div ref={ref} className={`tile-box tile-${props.type} selectDisable ${className}`} onMouseOver={props.onHoverIn}
        onMouseOut={props.onHoverOut} onMouseMove={props.onMouseMove} onClick={props.onClick} style={divStyle}></div>;
});

export default TileBox;