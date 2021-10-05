import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Country.css';

const Country = (props) => {
    //destructuring
    const { name, img, price } = props.country;
    return (
        <div>
            <Container>
                <Col>
                    <Card
                        style={{
                            width: '18rem',
                            padding: '10px',
                            borderRadius: '10px',
                            border: '2px solid springgreen',
                        }}
                    >
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Learn {name}</Card.Title>
                            <Card.Text>
                                Learning {name} will help you to increase your
                                knowledge and exploring the culture and heritage
                                of that country.
                            </Card.Text>
                            <button
                                className="course-btn"
                                onClick={() =>
                                    props.handleAddCourse(props.country)
                                }
                            >
                                Buy For: ${price}
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default Country;
