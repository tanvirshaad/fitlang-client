import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="py-5">
            <h1 className="fs-1 fw-bold text-center py-5">
                Error <span className="featured-text">404</span>
            </h1>
            <h4 className="text-center py-5 mt-5 mb-5">Not Found</h4>
        </div>
    );
};

export default NotFound;
