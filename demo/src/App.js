import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.test.css';
import Navigator from './nav';
import Search from './search';
import Main from './main';

class App extends React.Component {
    render() {
        return [
            <header>
                <Navigator />
                <Search />
            </header>,
            <Main />,
            <footer>
                <address></address>
            </footer>
        ];
    }
}

export default App;
