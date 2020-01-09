import React from 'react';
import { pad } from './utilities';

export default class TimerBar extends React.PureComponent<{ amountOfTime: number; onExpiry: () => void; }, { timeRemaining: number }> {
    interval: number;
    isPaused: boolean;
    constructor(props) {
        super(props);
        this.interval = -1;
        this.state = { timeRemaining: props.amountOfTime };
        this.isPaused = false;
    }
    intervalHandler = () => {
        if(this.isPaused || this.state.timeRemaining == 0)
            return;
        let newTime = this.state.timeRemaining - 1000;
        if(newTime <= 0) {
            this.props.onExpiry();
            newTime = 0;
        }
        this.setState({ timeRemaining: newTime });
    };
    componentDidMount() {
        if(this.state.timeRemaining == 0) {
            this.props.onExpiry();
        }
        this.interval = setInterval(this.intervalHandler, 1000);
    }
    componentWillUnmount() {
        if(this.interval != -1) {
            clearInterval(this.interval);
            this.interval = -1;
        }
    }
    render() {
        // Time calculations for days, hours, minutes and seconds
        const distance = this.state.timeRemaining;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const timerString = `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
        return <span style={{ color: this.state.timeRemaining > 0 ? null : "red" }}>{timerString}</span>;
    }
}