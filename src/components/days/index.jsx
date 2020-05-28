import React from 'react';

import { OneHundredDays } from './static_data';
import { 
    DaysContainer,
    DayContainer,
    DayCount,
    ProjectInfo,
} from '../../styles/days';


const Days = () => {
    return(
        <DaysContainer>
            { OneHundredDays.map( (project, i) => {
                const Component = project.component;
                const isEven = i%2 == 0;
                const {
                    title,
                    date,
                    count,
                    tutorial,
                    blurb
                } = project;
                
                return(
                    <DayContainer key={ `${i}_project` }>
                        <DayCount count={ count } even={ isEven }>
                            <div className={ 'number' } />
                        </DayCount>
                        <Component />
                        <ProjectInfo>
                            <h2>{ title }</h2>
                            
                            { tutorial && <a target={ '_blank' } href={ tutorial }>Tutorial</a> }
                            { blurb && <p>{ blurb }</p> }
                            { date && <span className={ 'date' }>{ date }</span> }
                        </ProjectInfo>
                    </DayContainer>
                );
            })}
        </DaysContainer>
    );
};
export default Days;