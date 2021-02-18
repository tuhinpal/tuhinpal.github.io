import React from 'react';
import { Link } from 'react-router-dom';

export default class SingleBlog extends React.Component {
    componentDidMount() {
        document.title = `404 | Tuhin`;
    }

    render() {
        return (
            <div className="not-found">
                <Link className="text" to="../../">404</Link>
            </div>
        );
    }
}
