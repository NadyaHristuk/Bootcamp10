import React, { Component, Fragment}  from 'react';

export default class Counter extends Component {
    static defaultProps = {
        step: 1,
        initialValue: 0
    }

    state = {
        value: this.props.initialValue
    }

    handleIncrement= () => {
        this.setState((prevState, props) => ({
            value: prevState.value + props.step
        }));
    };

    handleDecrement= () => {
        this.setState((prevState, props) => ({
            value: prevState.value - props.step
        }));
    };

    render (){
        const {step} = this.props;
        const {value} = this.state;

        return(
            <Fragment>
                <span>{value}</span>
                <button onClick={this.handleIncrement}>Increment by {step}</button>
                <button onClick={this.handleDecrement}>Decrement by {step}</button>
            </Fragment>
        )
    }
}