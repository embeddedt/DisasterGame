
import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import TileBox from './TileBox';
import { ConstructionType } from './Construction';
import { TileGroundType } from './Tile';

interface TileBoxesProps {
    transform: string;
    baseZIndex: number;
    tileIndex: number;
    mustHide?: boolean;
    isSelected: boolean;
    onClick: () => void;
    onTileHover: (index: number) => void;
}
export default class TileBoxes extends React.PureComponent<TileBoxesProps> {
    tileRef: React.RefObject<HTMLImageElement>;
    isHovered: boolean;
    constructor(props) {
        super(props);
        this.getTileRef = this.getTileRef.bind(this);
        this.onTileHover = this.onTileHover.bind(this);
        this.tileRef = React.createRef();
        this.isHovered = false;
    }
    onTileHover(e: React.MouseEvent<HTMLDivElement>) {
        let newHoverState: boolean;
        if(e.type == "mouseout")
            newHoverState = false;
        else
            newHoverState = true;
        if(newHoverState != this.isHovered) {
            this.isHovered = newHoverState;
            this.props.onTileHover(newHoverState ? this.props.tileIndex : -1);
        }
    }
    getTileRef(): Element {
        return this.tileRef.current;
        /*
        if(this.props.isSelected || !this.state.isHovered)
            return this.tileRef.current;
        else {
            const fakeDim = 40;
            return {
                clientWidth: fakeDim,
                clientHeight: fakeDim,
                getBoundingClientRect: () => {
                    return { top: this.hoverY - (fakeDim / 2), left: this.hoverX  - (fakeDim / 2), right: this.hoverX + (fakeDim / 2),
                            bottom: this.hoverY + (fakeDim / 2), height: fakeDim, width: fakeDim };
                }
            } as Element;
        }
        */
    }
    render() {
        return <>
            <div className="tile selectDisable" style={{
                zIndex: (this.props.baseZIndex * 2) + 1,
                transform: this.props.transform
            }}>
                <TileBox type="riskbox" ringColor="#ff0000"/>
                <TileBox type="clickbox" className={`${this.props.isSelected ? "tile-clickbox-selected": ""}`} ref={this.tileRef}
                            onClick={this.props.onClick} onMouseMove={this.onTileHover} 
                            onHoverIn={this.onTileHover} onHoverOut={this.onTileHover}/>
            </div> 
        </>;
    }
}