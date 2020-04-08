import React, { Fragment } from 'react';
import logo from '../images/logo.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import gmail from '../images/gmail.png';

import { 
    Body,
    Section,
    LinksSection,
} from '../styles';


const Home = () => {
    return(
        <Body>
            <Section className={ 'accounts-container' }>
                <img className={ 'logo' } src={ logo } alt='' />
                <h1>dinna gonzales</h1>
                <h2>Frontend Developer</h2>
            </Section>

            <LinksSection className={ 'accounts-container' }>
                <a href={ 'https://github.com/dinnagonzales' } aria-label={ 'Github account' } target={ '_blank' } rel='noreferrer noopener'>
                    <img src={ github } alt='' />
                </a>
                <a href={ 'https://www.linkedin.com/in/dinnagonzales/' } aria-label={ 'Linkedin account' } target={ '_blank' } rel='noreferrer noopener'>
                    <img src={ linkedIn } alt='' />
                </a>
                <a href={ 'mailto:dinnapgonzales@gmail.com' } aria-label={ 'Email me at dinnapgonzales@gmail.com' } target={ '_blank' } rel='noreferrer noopener'>
                    <img src={ gmail } alt='' />
                </a>
            </LinksSection>

            
        </Body>
    );
};
export default Home;