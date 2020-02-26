import React from 'react';
import $ from 'jquery';

class Howto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: []
        }
    }
    componentDidMount() {
        fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet,contentDetails&key=AIzaSyDwcYtN_I9jHWzlGs3wv1xaN7Jp0qZfYYk&playlistId=PLcuqPfaAuMQhVTiHGx5sCt6x5aShPbPJ4")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    playlist: result.items
                })
            })
    }
    resize() {
        let $elem = $("#youtube_area .youtube_video iframe");
        $elem.height($elem.width() * 0.5625);
    }
    render() {
        $(this.resize);
        $(window).resize(this.resize).on("orientationchange", this.resize);
        return <section>
            <div id="youtube_area">
                <div class="youtube_description">
                    <h3>어떤 말을 쓰면 좋을까?</h3>
                    <p>그러게 말입니다.</p>
                </div>
                <div class="youtube_video">
                    <iframe src="https://www.youtube.com/embed/1i2BQ1oZAog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            {this.state.playlist.map((item) => (
                <article>
                    <a href={"//youtu.be/" + item.contentDetails.videoId} target="new">{item.snippet.title}</a><br />
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                </article>
            ))}
        </section>;
    }
}

export default Howto;