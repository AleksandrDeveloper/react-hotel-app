import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';

import { RoomsProvider } from './context'

const app = (
    <RoomsProvider>
        <Router>
            <React.StrictMode >
                <App />
            </React.StrictMode>
        </Router>
    </RoomsProvider>
)


ReactDOM.render(
    app,
    document.getElementById('root')
);

