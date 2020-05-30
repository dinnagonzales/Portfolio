import React from 'react';

import Days from './days/index.jsx';
import hello from '../images/hello.png'
import resume from '../misc/resume.pdf';

import { 
    ContentContainer,
    Button,
    ContentBody,
} from '../styles/main';


const Main = () => {
    return(
        <ContentContainer>                    
            <Days />
            <ContentBody>
                <img className={ 'WelcomeText' } src={ hello } alt={ 'Hello!' } />
                <h2 className={ 'ComingSoon' }>
                        Thanks for stopping by!
                        My name is Dinna Gonzales, a Frontend Developer from Los Angeles!
                        As of 5.25.2020, I am commiting to #100DaysOfCode and all my progress
                        will be documented here.
                    <br />
                </h2>
                <Button href={ resume } target={ '_blank' }>
                        Download my resume
                </Button>
            </ContentBody>
        </ContentContainer>
    );
};
export default Main;