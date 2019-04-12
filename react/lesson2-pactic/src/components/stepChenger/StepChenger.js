import React from 'react';
import s from './StepChenger.module.css';


const StepChenger = ({counterStep, onUpdateStep}) => (
    <div>
        <p className={s.text}>Counter step: {counterStep}</p>
        <button onClick={onUpdateStep}>Update step!</button>
        <table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
    </div>
);

export default StepChenger;