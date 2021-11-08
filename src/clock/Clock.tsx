import React, {Component} from 'react';

interface StateType {
    currentTime: string
}

export class Clock extends Component<{}, StateType> {
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
        return <div>
            {this.state.currentTime}
        </div>;
    }
}