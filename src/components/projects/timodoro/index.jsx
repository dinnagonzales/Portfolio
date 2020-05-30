import React, { useState } from 'react';
import _ from 'lodash';

import {
    TimodoroContainer,
    TimodoroForm,
} from './styles';

const Timodoro = (props) => {
    const { title, timers } = props.data;
    return(
        <TimodoroContainer>
            Timodoro - { title }
            <ol>
                { timers.map((t, i) => {
                    const { name, duration } = t;
                    return(
                        <li key={ `${name}_${i}` }>
                            { name }: { duration }
                        </li>
                    )
                })}
            </ol>
        </TimodoroContainer>
    )
};

const newTimer = { 
    duration: '',
    name: ''
};

const TimodoroApp = () => {
    const storage = window.localStorage.getItem('timodoros');
    const timodoros = !_.isNull(storage) ? JSON.parse(storage) : [];
    
    const [ timodoro, saveTimodoro ] = useState({
        title: '',
        timers: [ newTimer ],
    });

    const udpateTitle = (value) => {
        let updatedTimodoro = _.cloneDeep(timodoro);
        updatedTimodoro.title = value;

        saveTimodoro(updatedTimodoro);
    };

    const udpateTimer = (index, key, value) => {
        let updatedTimodoro = _.cloneDeep(timodoro);
        updatedTimodoro.timers[index][key] = value;

        saveTimodoro(updatedTimodoro);
    };

    return(
        <TimodoroForm>
            Timodoro App
            { !_.isEmpty(timodoros) ?
                timodoros.map((timodoro, i) => {
                    return <Timodoro key={ `${i}_timodoro` } data={ timodoro } />
                })
                : <p>No Timodoros saved</p>
            }

            Create a Timodoro
            <form>
                <label htmlFor={ 'title '}>Set Name</label>
                <input type={ 'text' } name={ 'title' } onChange={ (e) => udpateTitle(e.currentTarget.value) } value={ timodoro.title } />

                { timodoro.timers.map((t, i) => {
                    return(
                        <fieldset key={ `${i}_timer` }>
                            <label htmlFor={ 'name' }>Timer Name</label>
                            <input type={ 'text' } name={ 'name' } onChange={ (e) => udpateTimer(i, 'name', e.currentTarget.value) } value={ t.name } />
                            <label htmlFor={ 'duration' }>Duration(in minutes)</label>
                            <input type={ 'text' } name={ 'duration' } onChange={ (e) => udpateTimer(i, 'duration', e.currentTarget.value) } value={ t.duration } />
                        </fieldset>
                    )
                })}
                <button onClick={ (e) => {
                    e.preventDefault();
                    let updatedTimodoro = _.cloneDeep(timodoro);
                    updatedTimodoro.timers.push(newTimer);

                    saveTimodoro(updatedTimodoro);
                }}>
                    Add a timer
                </button>

                <button onClick={ (e) => {
                    e.preventDefault();
                    window.localStorage.setItem('timodoros', JSON.stringify([ ...timodoros, timodoro ]));
                    saveTimodoro({
                        title: '',
                        timers: [ newTimer ],
                    });
                } } type="submit">
                    Save Timodoro
                </button>
            </form>
        </TimodoroForm>
    );
};
export default TimodoroApp;