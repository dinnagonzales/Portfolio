import React, { Fragment } from 'react';

import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

import {
    Container,
} from '../styles';

const Home = () => {
    return(
        <Container>
            <h1 className={ 'hidden' }>Dinna Gonzales Portfolio</h1>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};
export default Home;