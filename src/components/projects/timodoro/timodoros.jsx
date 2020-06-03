import React from 'react';

import Timodoro from './timodoro.jsx';

import {
    TimodorosContainer,
} from './styles';


const Timodoros = ({ timodoros }) => {
    return(
        <TimodorosContainer>
            { !_.isEmpty(timodoros) ?
                timodoros.map((timodoro, i) => {
                    return <Timodoro key={ `${i}_timodoro` } data={ timodoro } />
                })
                : <p>No Timodoros saved</p>
            }
        </TimodorosContainer>
    )
};

export default Timodoros;