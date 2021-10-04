import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h1 className="fs-1 fw-bold text-center">
                Error <span className="featured-text">404</span>
            </h1>
            <h4 className="text-center">Not Found</h4>
        </div>
    );
};

export default NotFound;
