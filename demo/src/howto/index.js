import React from 'react';
import $ from 'jquery';
import L from 'leaflet';
import { withRouter } from 'react-router';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import './howto.css';

import demoHowto from '../demo/howto.json';

class Howto extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            playlist: []
        }
    }
    componentDidMount() {
        fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet,contentDetails&key=AIzaSyDwcYtN_I9jHWzlGs3wv1xaN7Jp0qZfYYk&playlistId=UUuMZqSSgPLfvdHhBL8kuLpw&maxResults=8")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    playlist: result.items
                })
            });

        if (this.props.match && this.props.match.params.howtoId) {
            var map = L.map('howto_map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        }
    }
    resize() {
        let $elem = $("#youtube_area .youtube_video iframe");
        $elem.height($elem.width() * 0.5625);
    }
    render() {
        var howtoId = null;
        if (this.props.match && this.props.match.params.howtoId) howtoId = this.props.match.params.howtoId;

        $(this.resize);
        $(window).resize(this.resize).on("orientationchange", this.resize);

        var idx = 8;
        return <section>
            <div id="youtube_area">
                <div class="youtube_description">
                    <h1>어떤 말을 쓰면 좋을까?</h1>
                    <p>{(howtoId) ? "이 영상의 ID는 " + howtoId + "입니다." : "그러게 말입니다."}</p>
                </div>
                <div class="youtube_video">
                    <iframe src={"https://www.youtube.com/embed/"+((howtoId)?demoHowto.videoId:"Hr8n9lmFOG4")} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            {
                (() => {
                    if (!howtoId) return;
                    return <div id="howto_area">
                        <div class="howto_recycle">
                            <h2>분리수거 방법</h2>
                            <ol>
                                {
                                    demoHowto.direction.map((item) => (
                                        <li>
                                            <div class="howto_recycle_image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div class="howto_recycle_description">
                                                <h3>{item.text}</h3>
                                                {(() => {
                                                    if (!item.comment) return;
                                                    return <p>{item.comment}</p>;
                                                })()}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                        <div class="howto_bury_at">
                            <h3>근처 분리수거장 위치</h3>
                            <div id="howto_map" />
                        </div>
                    </div>;
                })()
            }
            <form id="howto_list_search" class="search_form">
                <input type="text" placeholder="분리배출 방법이 궁금한 제품은?" />
                <Link to="/howto/a"><button class="default"><i class="material-icons inline">search</i></button></Link>
            </form>
            <div id="howto_list_area">
            
                {this.state.playlist.map((item) => {
                    return <article><Link to={"/howto/" + (idx--)}>
                    <div class="howto_list_image">
                        <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                    </div>
                    <span>{item.snippet.title}</span></Link>
                </article>;
                })}
            </div>
            <div id="howto_list_nav">
                <button><i class="material-icons inline">chevron_left</i></button>
                <button class="default">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button disabled>&hellip;</button>
                <button>9</button>
                <button><i class="material-icons inline">chevron_right</i></button>
            </div>
        </section>;
    }
}

export default withRouter(Howto);