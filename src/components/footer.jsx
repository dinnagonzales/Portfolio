import React from 'react';

import connect from '../images/connect.png';

import { 
    Container,
    ConnectImg,
} from '../styles/footer';


const Footer = () => {
    return(
        <Container>
            <ConnectImg src={ connect } alt={ 'Connect with me!' } />
        </Container>
    );
};
export default Footer;