import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './App.test.css';

import Navigator from './nav';
import Search from './search/header';
import Main from './main';

class App extends React.Component {
    render() {
        return <BrowserRouter basename={process.env.PUBLIC_URL}>
            <header>
                <Navigator />
                <p id="logo">에코위시</p>
                <Search />
            </header>
            <Main />
            <footer>
                <div>
                    <p>ECOWISH</p>
                    <address>77, Jeongneung-ro, Seongbuk-gu, Seoul, Republic of Korea</address>
                    <p>(C) 2020 ECOWISH.</p>
                </div>
            </footer>
        </BrowserRouter>;
    }
}

export default App;
