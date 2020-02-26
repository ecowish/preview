import React from 'react';
import $ from 'jquery';

import './ranking.css';

class Ranking extends React.Component {
    render() {
        return <section>
            <h1>편리한 에코 분야별 순위</h1>
            <h2>분야별 1위</h2>
            <ul class="ranking_wrap">
                <li>
                    <img alt="" />
                    <div class="ranking_description">
                        <h3>생수</h3>
                        <p>이분이고요</p>
                    </div>
                </li>
                <li>
                    <img alt="" />
                    <div class="ranking_description">
                        <h3>음료수</h3>
                        <p>이분이고요</p>
                    </div>
                </li>
                <li>
                    <img alt="" />
                    <div class="ranking_description">
                        <h3>커피숍</h3>
                        <p>이분이고요</p>
                    </div>
                </li>
            </ul>
        </section>;
    }
}

export default Ranking;