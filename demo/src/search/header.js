import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    render() {
        return <form id="search">
            <input type="text" id="query" name="query" placeholder="검색" />
            <Link to="/search/a"><button>검색</button></Link>
        </form>;
    }
}

export default Search;