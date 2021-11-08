import React, {Component} from 'react';
import style from './Clock.module.css';
import {AnalogClock} from "./AnalogClock";

export interface TimeType {
    currentTime: string
}

export class Clock extends Component<{}, TimeType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
    }

    componentDidMount() {
        this.launchClock();
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    render() {
        return <div className={style.container}>
            <AnalogClock currentTime={this.state.currentTime}/>
            {this.state.currentTime}
        </div>;
    }
}