import React from 'react';
import './Review.css';

const Review = (props) => {
    //destructuring
    const { name, img, message } = props.review;
    return (
        <div>
            <div className="card m-3" style={{ width: '25rem' }}>
                <img
                    src={img}
                    className="card-img-top img-thumbanil img-fluid rounded-circle fixed-height"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
