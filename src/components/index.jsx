import React, { Fragment } from 'react';

import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

const Home = () => {
    return(
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
};
export default Home;