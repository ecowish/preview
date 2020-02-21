import React from 'react';

class Mediacast extends React.Component {
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
    render() {
        return [<section><iframe width="560" height="315" src="https://www.youtube.com/embed/1i2BQ1oZAog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section>,
        <section>{this.state.playlist.map((item) => (
            <article>
                <a href={"//youtu.be/" + item.contentDetails.videoId} target="new">{item.snippet.title}</a><br />
                <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
            </article>
        ))}</section>];
    }
}

export default Mediacast;