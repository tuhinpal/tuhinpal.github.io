import React from 'react';

export default class Skillsets extends React.Component {

    componentDidMount() {
        document.title = `Skillsets | Tuhin`;
    }

    render() {
        return (
            <div>
                <div className="projects_header">
                    <h1>Skillsets</h1>
                    <p>I love and work with these Technologies</p>
                </div>

                <div className="skillsets">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="card">
                        <img src="./image/icons/javascript.svg" alt="Javascript" />
                    </a>
                    <a href="https://nodejs.org/" className="card">
                        <img src="./image/icons/node-brands.svg" alt="NodeJS" />
                    </a>
                    <a href="https://www.mongodb.com/" className="card">
                        <img src="./image/icons/mongodb.svg" alt="MongoDB" />
                    </a>
                    <a href="https://reactjs.org/" className="card">
                        <img src="./image/icons/react.svg" alt="React" />
                    </a>
                    <a href="https://html5.org/" className="card">
                        <img src="./image/icons/html5.svg" alt="Html5" />
                    </a>
                    <a href="https://sass-lang.com/" className="card">
                        <img src="./image/icons/sass.svg" alt="Sass" />
                    </a>
                    <a href="https://docker.io/" className="card">
                        <img src="./image/icons/docker.svg" alt="Docker" />
                    </a>
                    <a href="https://firebase.google.com/" className="card">
                        <img src="./image/icons/firebase.svg" alt="Firebase" />
                    </a>
                    <a href="https://nextjs.org/" className="card">
                        <img src="./image/icons/next-dot-js.svg" alt="NextJS" />
                    </a>
                    <a href="https://python.org/" className="card">
                        <img src="./image/icons/python.svg" alt="Python" />
                    </a>
                </div>
            </div>
        );
    }
}
