import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export default class SingleBlog extends React.Component {
    state = {
        blog: <div className="projects_loading">
            <br /><br /><br /><br />
            <div className="loader_container">
                <div className="big_bar">
                </div>
                <div className="big_bar">
                </div>
            </div>
        </div>
    };

    componentDidMount() {
        document.title = `Blog | Tuhin`;
        axios.get(`../../blogs/${this.props.match.params.name}.md`)
            .then(response => {
                if (response.headers['content-type'].includes('text/markdown')) {
                    var pagename = this.props.match.params.name.replace(/-/gi, ' ')
                    document.title = `${pagename.charAt(0).toUpperCase()}${pagename.slice(1)} | Tuhin`;
                    this.setState({
                        blog: <div className="blog_single"><ReactMarkdown plugins={[gfm]} children={response.data} escapeHtml={false} /></div>
                    })
                } else {
                    document.title = `Not Found | Tuhin`;
                    this.setState({
                        blog: <div className="not-found"><Link className="text" to="../../blog">404</Link> </div>
                    })
                }
            })
            .catch(err => {
                document.title = `Not Found | Tuhin`;
                this.setState({
                    blog: <div className="not-found"><Link className="text" to="../../blog">404</Link> </div>
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.blog}
            </div>
        );
    }
}
