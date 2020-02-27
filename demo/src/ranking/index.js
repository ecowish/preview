import React from 'react';
import PropTypes from "prop-types";
import $ from 'jquery';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import './ranking.css';

import demoRanking from '../demo/ranking.json';

class Ranking extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    renderRanking(ranking_array, category, firstOnTop) {
        var ranking = [];
        var chunk = [], i = (firstOnTop)?-1:0;
        for(var item in ranking_array) {
            i++;
            ranking_array[item].path = item;
            chunk.push(ranking_array[item]);
            if(i % 3 == 0) {
                ranking.push(chunk);
                chunk = [];
            }
        }
        if(i % 3 > 0) ranking.push(chunk);

        var rank = 1;

        return ranking.map((chunk) => (
            <ul class="ranking_wrap">
                {
                    chunk.map((item) => {
                        var obj = (category)?item:item.ranking[0];
                        console.log(item);
                        return <li>
                            <div class="ranking_image">
                                <img src={obj.image} alt="" />
                            </div>
                            <div class="ranking_description">
                                <Link to={(category)?"#":"/ranking/"+item.path}>
                                    <h3>{(category)?(rank++)+"위":item.caption+" 분야"}</h3>
                                    <p>{obj.name}</p>
                                </Link>
                            </div>
                        </li>
                    })
                }
            </ul>
        ));
    }
    render() {
        var category = null, ranking_orig = demoRanking;
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
            ranking_orig = demoRanking[category].ranking;
        }
        
        return <section>
            <h1>편리한 에코 분야별 순위</h1>
            <h2>{(category)?demoRanking[category].caption + " 분야":"분야별 1위"}</h2>
            {
                this.renderRanking(ranking_orig, category, category)
            }
        </section>;
    }
}

export default withRouter(Ranking);