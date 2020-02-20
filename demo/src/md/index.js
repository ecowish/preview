import React from 'react';
import Md from 'react-markdown';
import { Link } from 'react-router-dom';

export const Markdown = (props) => {
    return <Md source={props.source} renderers={{link: (props) => {
        return props.href.match(/^(https?:)?\/\//)
        ? <a href={props.href}>{props.children}</a>
        : <Link to={props.href}>{props.children}</Link>
    }}} />
}

class StaticPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            md: ""
        };
    }
    componentDidMount() {
        fetch(this.props.params.md)
        .then(res => res.text())
        .then((result) => {
            this.setState({
                md: result
            });
        }, (error) => {
            console.error(error);
        });
    }
    render() {
        return <Markdown source={this.state.md} />
    }
}

export default StaticPage;