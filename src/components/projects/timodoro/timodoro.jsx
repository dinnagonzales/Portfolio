import React, { useState, useEffect  } from 'react';
import { useInterval } from '../helpers';

import {
    TimodoroContainer,
} from './styles';

const Timodoro = (props) => {
    const { title, timers } = props.data;

    const [ current, updateCurrent ] = useState(0);
    const [ status, updateStatus ] = useState('STOP');

    useInterval(() => {
        updateCurrent(current + 1);
    }, status === 'START' ? 1000 : null);

    useEffect(() => {
        if(status === 'STOP'){
            return updateCurrent(0);
        }
    }, [ status ]);

    return(
        <TimodoroContainer>
            Timodoro - { title }

            <button onClick={ () => updateStatus('START') }>Start</button>
            <button onClick={ () => updateStatus('STOP') }>Stop</button>
            <button onClick={ () => updateStatus('PAUSE') }>Pause</button>
            <ol>
                { timers.map((t, i) => {
                    const { name, duration } = t;
                    return(
                        <li key={ `${name}_${i}` }>
                            { name }: { duration } { status === 'START' && current >= parseInt(t.start) && current <= parseInt(t.end)  ? "ACTIVE" : "." }
                        </li>
                    )
                })}
            </ol>
        </TimodoroContainer>
    )
};

export default Timodoro;