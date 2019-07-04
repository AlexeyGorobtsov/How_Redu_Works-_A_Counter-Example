import React, {Component} from 'react';

export class Counter extends Component {

    render() {
        const { increment, decrement } = this.props;
        return(
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={increment}>+</button>
                </div>
            </div>
        )
    }
}
