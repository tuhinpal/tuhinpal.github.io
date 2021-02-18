import React from 'react';
import me from '../images/me.jpg';
import { Link } from 'react-router-dom';

export default class Index extends React.Component {

    state = {
        title: 1
    }

    componentDidMount() {
        var titlechange = setInterval(() => {
            if (this.state.title === 1) {
                document.title = '|'
                this.setState({ title: this.state.title + 1 })
            } else if (this.state.title === 2) {
                document.title = 'T|'
                this.setState({ title: this.state.title + 1 })
            } else if (this.state.title === 3) {
                document.title = 'Tu|'
                this.setState({ title: this.state.title + 1 })
            } else if (this.state.title === 4) {
                document.title = 'Tuh|'
                this.setState({ title: this.state.title + 1 })
            } else if (this.state.title === 5) {
                document.title = 'Tuhi|'
                this.setState({ title: this.state.title + 1 })
            } else if (this.state.title === 6) {
                document.title = 'Tuhin|'
                this.setState({ title: this.state.title + 1 })
            } else if (this.state.title === 7) {
                document.title = 'Tuhin'
                clearInterval(titlechange)
            }
        }, 430)
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>I'm <span className="geruya">Tuhin</span> <span className="sada">Kanti</span> <span className="sobuj">Pal</span>.</h1>
                    <p>I'm a programmer, Security Researcher and Opensource Enthusiast. I have Researched about many Indian OTT apps security and founded many bugs as well. I have created some awesome Open Source projects, They are available on my <a target="_blank" href="https://github.com/cachecleanerjeet">Github</a>.
                  Yeah, I love Monospace.
              </p>
                    <Link to="../../works" className="button">View my Works</Link>
                    <p className="social">
                        <a target="_blank" href="https://github.com/cachecleanerjeet/"><i className="fa fa-github-alt item gh"></i></a>
                        <a target="_blank" href="https://twitter.com/jeeetpaul"><i className="fa fa-twitter item tw"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/tuhin-kanti-pal-ab299a1ba/"><i className="fa fa-linkedin item ln"></i></a>
                        <a target="_blank" href="http://youtube.com/jeetpaul"><i className="fa fa-youtube-play item yt"></i></a>
                        <a target="_blank" href="https://www.telegram.dog/cachecleanerjeet"><i className="fa fa-telegram item tg"></i></a>
                    </p>
                </div>
                <div className="imagectnr">
                    <img className="img" src={me} alt="Tuhin" />
                </div>
            </div>
        )
    }
}
