import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./success.JSON')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col lg={12} className="text-center">
                        <h1 className="fw-bold fs-1">
                            Our Success{' '}
                            <span className="featured-text">Stories</span>
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {reviews.map((review) => (
                        <div className="col-lg-6">
                            <Review key={review.id} review={review}></Review>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
