import React from 'react';

const StepChenger = ({counterStep, onUpdateStep}) => (
    <div>
        <p>Counter step: {counterStep}</p>
        <button onClick={onUpdateStep}>Update step!</button>
    </div>
);

export default StepChenger;