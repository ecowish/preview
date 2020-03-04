import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import './search.css';

class Search extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    render() {
        var demo = (img, name, desc) => (
            <li>
                <div class="search_image">
                    <img src={img} alt="" />
                </div>
                <div class="search_description">
                    <Link to="#">
                        <h3>{name}</h3>
                        <p>{desc}</p>
                    </Link>
                </div>
            </li>
        )
        return <section>
            <h1>{this.props.match.params.keyword} 검색결과</h1>
            <div id="search_howto">
                <h2>슬기로운 분리수거</h2>
                <ul class="search_result">
                    {
                        (() => {
                            var demoArray = [];
                            for(var i = 0; i < 3; i++) demoArray.push(demo("https://i.ytimg.com/vi/Y30JwLUNy28/default.jpg", "아아아", <p>그러니까 이런 거 아주 좋구요 그렇다구요</p>));
                            return demoArray;
                        })()
                    }
                </ul>
                <p class="search_more">더보기 <i class="material-icons inline">chevron_right</i></p>
                <p class="search_result">검색 결과가 없습니다.</p>
            </div>
            <div id="search_ranking">
                <h2>편리한 에코 분야별 순위</h2>
                <ul class="search_result">
                    {
                        (() => {
                            var demoArray = [];
                            for(var i = 0; i < 3; i++) demoArray.push(demo("https://cdn.imweb.me/thumbnail/20181205/5c0780175c74f.png", "아이시스 8.0", "생수 분야 1위"));
                            return demoArray;
                        })()
                    }
                </ul>
                <p class="search_more">더보기 <i class="material-icons inline">chevron_right</i></p>
                <p class="search_result">검색 결과가 없습니다.</p>
            </div>
        </section>
    }
}

export default withRouter(Search);