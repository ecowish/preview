import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    render() {
        return <form class="search_form" id="search">
            <input type="text" id="query" name="query" placeholder="검색" />
            <Link to="/search/a"><button><i class="material-icons inline">search</i></button></Link>
        </form>;
    }
}

export default Search;