import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TimerBar from './TimerBar';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Typography from '@material-ui/core/Typography';

const PopulationInfo: React.FunctionComponent<{ housed: number; unhoused: number; dead: number; onExpiry: () => void; }> = (props) => {
    return <ExpansionPanel square className="population-info">
        <ExpansionPanelSummary expandIcon={<ExpandLessIcon />}>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <div className="population-column">
                <Typography variant="h5">POPULATION</Typography>
                <p></p>
                <ul>
                    <li style={{color: "red"}}>Deceased: {props.dead}</li>
                    <li style={{color: "black"}}>Homeless: {props.housed}</li>
                    <li style={{color: "green"}}>Sheltered: {props.unhoused}</li>
                </ul>
            </div>
            <div className="population-column">
                <Typography variant="h5">DISASTER TIMER</Typography>
                <p></p>
                <TimerBar amountOfTime={1000*60*20} onExpiry={props.onExpiry}/>
            </div>
        </ExpansionPanelDetails>
    </ExpansionPanel>;
}
export default PopulationInfo;