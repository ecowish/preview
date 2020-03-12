import React from 'react';
import $ from 'jquery';
import './main.css';
import { renderRanking } from '../ranking';
import { Link } from 'react-router-dom';

import demoRanking from '../demo/ranking.json';

class MainPage extends React.Component {
    resize() {
        let $elem = $("#youtube_area .youtube_video iframe");
        $elem.height($elem.width() * 0.5625);
    }

    render() {
        $(this.resize);
        $(window).resize(this.resize).on("orientationchange", this.resize);

        return <section>
            <div id="search_area">
                <h1>분리배출 방법이 궁금한 제품은?</h1>
                <form class="search_form">
                    <input id="query" name="query" type="text" placeholder="삼다수" />
                    <Link to="/howto/a"><button class="default"><i class="material-icons inline">search</i></button></Link>
                </form>
            </div>
            <div id="ranking_area">
                <h1>편리한 에코 분야별 순위</h1>
                <h2>생수 부문</h2>
                <div class="ranking_slide">
                    <button class="ranking_prevbtn"><i class="material-icons">chevron_left</i></button>
                    {
                        renderRanking(demoRanking.water.ranking.slice(0, 3), true)
                    }
                    <button class="ranking_nextbtn"><i class="material-icons">chevron_right</i></button>
                </div>
            </div>
            <div id="youtube_area">
                <div class="youtube_description">
                    <h1>어떤 말을 쓰면 좋을까?</h1>
                    <p>그러게 말입니다.</p>
                </div>
                <div class="youtube_video">
                    <iframe src="https://www.youtube.com/embed/Hr8n9lmFOG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    }
}

export default MainPage;