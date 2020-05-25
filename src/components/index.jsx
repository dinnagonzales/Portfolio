import React, { Fragment } from 'react';

import Header from './main/header.jsx';
import Footer from './main/footer.jsx';

import Main from './main.jsx';

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