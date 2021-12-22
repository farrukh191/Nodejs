import React from 'react';
import { Link } from 'react-router-dom';

function Errorpage(props) {
    return (
        <>
            <div className="error">
                <h1>404 ERROR</h1>
                <Link to="/">Back to Home page</Link>
            </div>

        </>
    );
}

export default Errorpage;