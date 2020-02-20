import React from 'react';

class Search extends React.Component {
    render() {
        return <form id="search">
            <input type="text" id="query" name="query" placeholder="검색" />
            <span>[검색]</span>
        </form>;
    }
}

export default Search;