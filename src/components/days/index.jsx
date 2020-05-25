import React from 'react';

import { OneHundredDays } from './static_data';
import { 
    DaysContainer,
    DayContainer,
    DayCount
} from '../../styles/days';


const Days = () => {
    return(
        <DaysContainer>
            { OneHundredDays.map( (project, i) => {
                const Component = project.component;
                const isEven = i%2 == 0;
                return(
                    <DayContainer key={ `${i}_project` }>
                        <DayCount day={ i+1 } even={ isEven }>
                            <div className={ 'number' } />
                        </DayCount>
                        { project.title }
                        <Component />
                    </DayContainer>
                );
            })}
        </DaysContainer>
    );
};
export default Days;