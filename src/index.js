import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/index.jsx'

ReactDOM.render(<Home />, document.getElementById('Body-Container'));

if(process.env.NODE_ENV === 'production') {
    console.log("PROD mode");
}else if(process.env.NODE_ENV === 'development') {
    console.log("DEV mode");
}