import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../contact';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elem: null
        };
    }
    render() {
        document.body.onload = () => {
            var elem = <Contact />;
            this.setState({elem: elem});
        }
        return <main>
            {this.state.elem}
        </main>;
    }
}

export default Main;