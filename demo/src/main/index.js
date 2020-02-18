import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../contact';

class Main extends React.Component {
    render() {
        var elem = <Contact />;

        return <main>
            {elem}
        </main>;
    }
}

export default Main;