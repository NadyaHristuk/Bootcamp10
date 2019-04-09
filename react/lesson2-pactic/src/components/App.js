import React, { Component } from 'react';
import Counter from './counter/Counter';
import StepChenger from './stepChenger/StepChenger';
import './App.css';

export default class App extends Component {
  state = {
    counterStep: 0,
  }

  handlerChengeStep = () => {
    this.setState(prevState => ({
      counterStep: prevState.counterStep+1
    }));
  };

  render() {
   const {counterStep} = this.state

    return (
      <div>
        <StepChenger 
          counterStep={counterStep} 
          onUpdateStep={this.handlerChengeStep}
        />      
        <Counter step={counterStep} initialValue={0} />
      </div>    
    );
  }
}

 
