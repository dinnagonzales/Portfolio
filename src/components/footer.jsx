import React from 'react';

import connect from '../images/connect.png';

import git from '../images/git-logo.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';

import { 
    Container,
    ConnectImg,
    Img,
    FooterButton,
} from '../styles/footer';


const Footer = () => {
    return(
        <Container>
            <ConnectImg src={ connect } alt={ 'Connect with me!' } />
            
            <FooterButton href={ 'https://github.com/dinnagonzales' } target={ '_blank' } aria-label={ 'Go to my Github account' }>
                <Img src={ git } alt={ '' } />
            </FooterButton>
            
            <FooterButton href={ 'https://linkedin.com/in/dinnagonzales' } aria-label={ 'Go to my Linked in account' }>
                <Img src={ linkedin } alt={ '' } />
            </FooterButton>

            <FooterButton href={ 'mailto:dinnapgonzales@gmail.com' } aria-label={ 'Email me - dinnapgonzales@gmail.com' }>
                <Img src={ email } alt={ '' } />
            </FooterButton>

            <span className={ 'copyright' }>https://dinnagonzales.com © May 2020</span>
        </Container>
    );
};
export default Footer;