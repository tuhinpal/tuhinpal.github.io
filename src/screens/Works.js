import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

export default class Works extends React.Component {
    state = {
        projects: <div className="projects_loading">
            <div className="loader_container">
                <div className="big_bar">
                </div>
                <div className="big_bar">
                </div>
            </div>
        </div>
    };

    componentDidMount() {
        document.title = "Works | Tuhin";
        axios.get(`${API_URL}/works`)
            .then(response => {
                this.setState({
                    projects: response.data.data.projects.map((data, no) => (
                        <div className="project" key={no}>
                            <div className="image">
                                <img src={data.project_image} alt={data.project_name} />
                            </div>
                            <div className="content">
                                <h1>{data.project_name} <img src={data.project_language_image} className="usedlang" alt="Javascript" /></h1>
                                <p>{data.project_description}</p>
                                <div className="action">
                                    {data.project_action.website.available ? <a target="_blank" href={data.project_action.website.content} className="btn"><i className="fa fa-globe fa-lg"></i></a> : ''}
                                    {data.project_action.github.available ? <a target="_blank" href={data.project_action.github.content} className="btn"><i className="fa fa-github-alt fa-lg"></i></a> : ''}
                                    {data.project_action.case_study.available ? <Link to={data.project_action.case_study.content} className="btn">Case Study</Link> : ''}
                                    {data.project_action.demo.available ? <a target="_blank" href={data.project_action.demo.content} className="btn">Demo</a> : ''}
                                    {data.project_action.youtube.available ? <a target="_blank" href={data.project_action.youtube.content} className="btn"><i className="fa fa-youtube-play fa-lg"></i></a> : ''}
                                </div>
                            </div>
                        </div>
                    ))
                })
            })
    }

    render() {
        return (
            <div>
                <div className="projects_header">
                    <h1>My Works</h1>
                    <p>Some of my works which I love are listed here, other Open Sourced projects can be found on my <br /><a className="gh" href="https://github.com/cachecleanerjeet">Github</a></p>
                </div>
                {this.state.projects}
            </div>
        );
    }
}
