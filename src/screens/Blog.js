import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

export default class Blog extends React.Component {
    state = {
        loading: <div className="projects_loading">
            <div className="loader_container">
                <div className="big_bar">
                </div>
                <div className="big_bar">
                </div>
            </div>
        </div>,
        blogs: ''
    };

    componentDidMount() {
        document.title = `Blog | Tuhin`;
        axios.get(`${API_URL}/blogs`)
            .then(response => {
                this.setState({
                    loading: '',
                    blogs: response.data.data.blogs.map((data, no) => (
                        <div className="blog_card" key={no}>
                            <div className="blog_card-header">
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div className="blog_card-body">
                                <p className="tag">
                                    <span className="">{data.category}</span> <span className="">{data.time} min read</span>
                                </p>
                                <h4>{data.name}</h4>
                                <p className="small_content">{data.description}</p>
                                <Link to={'../../blog/' + data.callback} className="btn">Read More ➡</Link>
                            </div>
                        </div>
                    ))
                })
            })
    }

    render() {
        return (
            <div>
                <div className="blog_header">
                    <h1>Blog</h1>
                    <p>I am not a good blogger, but I love to share my experiences.</p>

                </div>
                {this.state.loading}
                <div className="blog_container">
                    {this.state.blogs}
                </div>
            </div>
        );
    }
}
