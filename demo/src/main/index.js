import React from 'react';
import { Routes } from '../nav/route';
import { withRouter } from 'react-router-dom';
import ContributeBanner from '../contact/banner';
import PropTypes from "prop-types";

class Main extends React.Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        window.scroll(0, 0);
    }

    constructor(props) {
        super(props);

        this.state = {
            elem: null
        };
    }
    render() {
        return <main>
            <Routes />
            <ContributeBanner />
        </main>;
    }
}

export default withRouter(Main);