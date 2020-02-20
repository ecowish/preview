import React from 'react';
import { Link, Links } from './route';

class Navigator extends React.Component {
    constructor() {
        super();

        this.menu_elem = React.createRef();
        this.home_link = React.createRef();
    }
    render() {
        window.onclick = (event) => {
            if(event.target == document.getElementById("menuButton")) return;
            this.menu_elem.current.style.display = 'none';
        }
        return <nav>
            <ul id="menu" ref={this.menu_elem}> {
                Links("li")
            } </ul>
            <button class="span noselect" id="menuButton" onClick={(event) => {
                var menu = this.menu_elem.current;
                var display = menu.style.display;
                
                menu.style.display = (display == 'block')? 'none':'block';

                event.preventDefault();
            }}>[메뉴]</button>
            <Link to="/" style={{display: "none"}} ref={this.home_link} />
            <button class="span noselect" onClick={(event) => this.home_link.current.click()}>[홈]</button>
        </nav>;
    }
}

export default Navigator;