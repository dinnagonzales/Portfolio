import React, { useState  } from 'react';
import _ from 'lodash';

import Timodoro from './timodoro.jsx';

import {
    TimodoroForm,
} from './styles';

import { prepTimers } from '../helpers';

const newTimer = { 
    duration: '',
    name: ''
};

const TimodoroApp = () => {
    const storage = window.localStorage.getItem('timodoros');
    const timodoros = !_.isNull(storage) ? JSON.parse(storage) : [];
    const [ errors, toggleErrors ] = useState(false);

    const [ timodoro, setTimodoro ] = useState({
        title: '',
        timers: [ newTimer ],
    });

    const udpateTitle = (value) => {
        let updatedTimodoro = _.cloneDeep(timodoro);
        updatedTimodoro.title = value;

        setTimodoro(updatedTimodoro);
    };

    const removeTimer = (i) => {
        let timers =  _.cloneDeep(timodoro.timers);
        timers.splice(i, 1);

        setTimodoro({ ...timodoro, timers });
    };
    
    const udpateTimer = (index, key, value) => {
        let updatedTimodoro = _.cloneDeep(timodoro);
        updatedTimodoro.timers[index][key] = value;

        setTimodoro(updatedTimodoro);
    };

    const validate = () => {
        const title = !!timodoro.title.length;
        const timers = timodoro.timers.every((t) => !!t.duration.length && !!t.duration.length);

        return title && timers;
    };

    const saveTimodoro = () => {
        const newTimpodoro = prepTimers(timodoro);
        window.localStorage.setItem('timodoros', JSON.stringify([ ...timodoros, newTimpodoro ]));
        setTimodoro({
            title: '',
            timers: [ newTimer ],
        });
    }
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
                <p>{ errors ? 'Please correct errors on form' : '!!!!' }</p>
                <label htmlFor={ 'title '}>Set Name</label>
                <input type={ 'text' } name={ 'title' } onChange={ (e) => udpateTitle(e.currentTarget.value) } value={ timodoro.title } />

                { timodoro.timers.map((t, i) => {
                    return(
                        <fieldset key={ `${i}_timer` }>
                            <label htmlFor={ 'name' }>Timer Name</label>
                            <input type={ 'text' } name={ 'name' } onChange={ (e) => udpateTimer(i, 'name', e.currentTarget.value) } value={ t.name } />
                            <label htmlFor={ 'duration' }>Duration(in minutes)</label>
                            <input type={ 'text' } name={ 'duration' } onChange={ (e) => udpateTimer(i, 'duration', e.currentTarget.value) } value={ t.duration } />
                            <button onClick={ (e) => { e.preventDefault(); removeTimer(i); }}>
                                X
                            </button>
                        </fieldset>
                        
                    )
                })}

                <button onClick={ (e) => {
                    e.preventDefault();
                    let updatedTimodoro = _.cloneDeep(timodoro);
                    updatedTimodoro.timers.push(newTimer);

                    setTimodoro(updatedTimodoro);
                }}>
                    Add a timer
                </button>

                <button onClick={ (e) => {
                    e.preventDefault();
                    if(validate()){
                        toggleErrors(false);
                        saveTimodoro();
                    }else{
                        toggleErrors(true);
                    }
                } } type="submit">
                    Save Timodoro
                </button>
                <button onClick={ (e) => {
                    e.preventDefault();
                    setTimodoro({
                        title: '',
                        timers: [ newTimer ],
                    });
                } } type="reset">
                    Reset
                </button>
            </form>
        </TimodoroForm>
    );
};
export default TimodoroApp;