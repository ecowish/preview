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
                    <input id="query" name="query" type="text" placeholder="예: 삼다수" />
                    <Link to="/howto/a"><button class="default"><i class="material-icons inline">search</i></button></Link>
                </form>
            </div>
            <div id="ranking_area">
                <h1>편리한 에코 분야별 순위</h1>
                <h2>생수 부문</h2>
                <h3>(분리배출에 소요되는 시간 기준)</h3>
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
                    <h1>슬기로운 분리배출 방법을 영상으로 살펴보세요</h1>
                    <p>아이시스 에코와<br />삼다수<br /><br />어떤 생수가 더 버리기 쉬울까?</p>
                </div>
                <div class="youtube_video">
                    <iframe src="https://www.youtube.com/embed/Hr8n9lmFOG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    }
}

export default MainPage;