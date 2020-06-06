import React, { Fragment } from 'react';

import Header from './main/header.jsx';
import Navigation from './main/navigation.jsx';
import Footer from './main/footer.jsx';
import TimodoroApp from './projects/timodoro/index.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Main from './main.jsx';

import {
    Container,
} from '../styles';

export default function App() {
    return (
        <Router>
            <Container>
                <Header />
                <Navigation />
                <Switch>
                    <Route path="/timodoro">
                        <TimodoroApp />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>

                </Switch>
                <Footer />
            </Container>
        </Router>
    );
}