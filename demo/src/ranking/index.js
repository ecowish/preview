import React from 'react';
import PropTypes from "prop-types";
import $ from 'jquery';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import './ranking.css';

import demoRanking from '../demo/ranking.json';

export function renderRanking(ranking, category, firstOnTop) {
    var idx = 1, rank = 1;

    return <ul class={"ranking_wrap" + ((firstOnTop) ? " firstOnTop" : "")}>
        {
            ranking.map((item) => {
                var obj = (category) ? item : item.ranking[0];
                if (!item.tiescore) rank = idx;
                idx++;
                return <li class={(rank == 1) ? "first" : ""}>
                    
                        <div class="ranking_item">
                        <Link to={(category) ? "#" : "/ranking/" + item.path}>
                            <div class="ranking_image_wrap">
                                <div class="ranking_image">
                                    <img src={obj.image} alt="" />
                                </div>
                            </div>
                            <div class="ranking_description">

                                <h3>{(category) ? (rank) + "위" : item.caption + " 분야"}</h3>
                                {(!category && item.criteria)?(() => (
                                    <div>({item.criteria} 기준)</div>
                                ))():""}
                                <ul>{obj.name.split('\n').map((line) => (<li>{line}</li>))}</ul>
                                {(category && item.score)?(() => (
                                    <div>({item.score})</div>
                                ))():""}
                            </div>
                            </Link>
                        </div>
                    
                </li>
            })
        }
    </ul >;
}

class Ranking extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    render() {
        var category = null, ranking_orig = [];
        if (this.props.match && this.props.match.params.category) {
            category = this.props.match.params.category;
            ranking_orig = demoRanking[category].ranking;
        } else {
            var demoRanking_mutable = JSON.parse(JSON.stringify(demoRanking));
            for (var cat in demoRanking_mutable) {
                var item = demoRanking_mutable[cat];
                item.path = cat;
                for (var ranking in item.ranking) {
                    var ranker = item.ranking[ranking];
                    if (ranking == 0) continue;
                    if (!ranker.tiescore) break;
                    item.ranking[0].name += "\n" + ranker.name;
                    console.log(ranking, ranker, item.ranking[0].name);
                }
                ranking_orig.push(item);
            }
        }

        return <section>
            <h1>편리한 에코 분야별 순위</h1>
            <h2>{(category) ? demoRanking[category].caption + " 분야" : "분야별 1위"}</h2>
            {
                renderRanking(ranking_orig, category, category)
            }
        </section>;
    }
}

export default withRouter(Ranking);