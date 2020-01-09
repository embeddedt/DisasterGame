import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { playAudio } from './utilities';

export class ControlBar extends React.PureComponent {
    render() { return <div className="top-controls">{this.props.children}</div>; }
}
const ControlSeparator = () => {
    return <span className="controls-separator"></span>;
}

function onButtonHover() {
    playAudio("audio/hover.mp3");
}
export type ControlButtonProps = { icon: any, playHoverSound?: boolean, active?: boolean } & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className">;
export class ControlButton extends React.PureComponent<ControlButtonProps> {
    render() {
        let { icon, active, playHoverSound, title, ...rest } = this.props;
        const buttonClass = `hoverable-button control-button${(active && !rest.disabled) ? " hoverable-button-active" : ""}`;
        const IconComponent = icon;
        if(typeof playHoverSound == 'undefined')
            playHoverSound = true;
        const buttonElement = <button onMouseEnter={playHoverSound ? onButtonHover : null} className={buttonClass} {...rest}>
            <IconComponent/>
        </button>;
        
        if(typeof title == 'string' && title.trim().length > 0)
            return <Tooltip title={title}>
                {buttonElement}
            </Tooltip>;
        else
            return buttonElement;
    }
    
}

const ControlArrow: React.FunctionComponent<{ direction: "left"|"right"|"up"|"down"}> = props => {
    return <i className={`fas fa-caret-${props.direction}`}></i>;
};
const ControlMenu: React.FunctionComponent<{ menuIcon: any; }> = props => {
    const [ menuOpen, setMenuOpen ] = React.useState(false);
    const onClick = React.useCallback(() => {
        setMenuOpen(!menuOpen);
    }, [ menuOpen ]);
    const childCount = menuOpen ? (React.Children.count(props.children) + 1.5) : 1;
    return <span className="control-menu" style={{
        maxWidth: `${(childCount * 2)}em`
    }}>
        <ControlButton icon={props.menuIcon} active={menuOpen} onClick={onClick}/>
        <span className="control-menu"><ControlArrow direction="right"/>{props.children}</span>
    </span>;
};

export { ControlSeparator, ControlMenu };