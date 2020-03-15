import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor() {
        super();

        this.search_form = React.createRef();
    }
    render() {
        return <div id="search_header">
            <button class="span noselect material-icons" id="searchButton" onClick={(event) => {
                var form = this.search_form.current;
                var display = form.style.display;
                
                //form.style.display = (display == 'block')? 'none':'block';
                form.setAttribute('style', (display == 'block')? 'display: none':'display: block !important');

                event.preventDefault();
            }}>search</button>
            <form class="search_form" id="search" ref={this.search_form}>
                <input type="text" id="query" name="query" placeholder="검색" />
                <Link to="/search/a"><button class="default"><i class="material-icons inline">search</i></button></Link>
            </form>
        </div>;
    }
}

export default Search;