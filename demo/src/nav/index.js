import React from 'react';
import ReactDOM from 'react-dom';
import menu_list from '../config/config.json';

class Navigator extends React.Component {
    constructor() {
        super();

        this.menu_elem = React.createRef();
    }
    render() {
        var menu_elem = [];
        for (var i in menu_list.menu) {
            var item = menu_list.menu[i];
            menu_elem.push(
                <li>{item.caption}</li>
            );
        }
        return <nav>
            <ul id="menu" ref={this.menu_elem}> {
                menu_elem
            } </ul>
            <button class="span noselect" onClick={() => {
                var menu = this.menu_elem.current;
                var display = menu.style.display;
                
                menu.style.display = (display == 'block')? 'none':'block';
            }}>[메뉴]</button>
        </nav>;
    }
}

export default Navigator;