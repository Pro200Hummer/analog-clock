import React, {Component} from 'react';

interface StateType {
    currentTime: string
}

export class Clock extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentTime: (new Date().toLocaleString())
        }
    }

    render() {
        return <div>
            {this.state.currentTime}
        </div>;
    }
}