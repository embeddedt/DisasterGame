import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TimerBar from './TimerBar';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Typography from '@material-ui/core/Typography';

const PopulationInfo: React.FunctionComponent<{ housed: number; unhoused: number; forceOpen?: boolean; showTimer: boolean; dead: number; onExpiry: () => void; }> = (props) => {
    const [ isOpen, setIsOpen ] = React.useState(false);
    const onChange = React.useCallback((evt, state) => {
        setIsOpen(state);
    }, []);
    React.useEffect(() => {
        if(props.forceOpen)
            setIsOpen(true);
    }, [ props.forceOpen ]);
    return <ExpansionPanel square expanded={isOpen} onChange={onChange} className="population-info">
        <ExpansionPanelSummary expandIcon={<ExpandLessIcon />}>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <div className="population-column">
                <Typography variant="h5">POPULATION</Typography>
                <p></p>
                <ul>
                    <li style={{color: "red"}}>Deceased: {props.dead}</li>
                    <li style={{color: "black"}}>Homeless: {props.unhoused}</li>
                    <li style={{color: "green"}}>Sheltered: {props.housed}</li>
                </ul>
            </div>
        </ExpansionPanelDetails>
    </ExpansionPanel>;
}
export default PopulationInfo;