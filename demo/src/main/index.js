import React from 'react';
import { Routes } from '../nav/route';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elem: null
        };
    }
    render() {
        return <main>
            <Routes />
        </main>;
    }
}

export default Main;