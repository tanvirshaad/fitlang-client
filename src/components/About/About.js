import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="pb-5">
            <Container>
                <Row className="mt-5">
                    <Col lg={12}>
                        <h1 className="fs-1 fw-bold text-center">
                            Meet Our <span className="coloured-text">Team</span>
                        </h1>
                        <Row className="mt-5">
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2020/07/428x250_Aelia-German-Teacher-300x175-1.jpg.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Aelia</Card.Title>
                                        <Card.Text>
                                            <h6 className="coloured-text">
                                                German Teacher
                                            </h6>
                                            <p>
                                                I really enjoy teaching so much
                                                and love to meet my students,
                                                who come from so different parts
                                                of the world and have diverse
                                                backgrounds, needs and
                                                interests.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2020/07/428x250_Isabelle-English-Teacher.jpg.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Isabelle</Card.Title>
                                        <Card.Text>
                                            <h6 className="coloured-text">
                                                English Teacher
                                            </h6>
                                            <p>
                                                I am from the United Kingdom and
                                                have been teaching English in
                                                different countries for the past
                                                five years. I love getting to
                                                know my students.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2020/07/428x250_Aelia-German-Teacher-300x175-1.jpg.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Agustina</Card.Title>
                                        <Card.Text>
                                            <h6 className="coloured-text">
                                                Spanish Teacher
                                            </h6>
                                            <p>
                                                Being able to help people
                                                acquire new abilities for better
                                                communication is what I most
                                                enjoy. I simply love teaching
                                                and languages.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2020/07/428x250_Haitham-English-Teacher2-300x175-1.jpg.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Mahbub Alam</Card.Title>
                                        <Card.Text>
                                            <h6 className="coloured-text">
                                                Bengali Teacher
                                            </h6>
                                            <p>
                                                I enjoy teaching students with
                                                various skill levels and
                                                backgrounds in a fun and
                                                friendly environment. I am a
                                                native speaker of Bengali, from
                                                the midwest.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2020/07/428x250_Franck-French-Teacher.jpg.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Franc Armand</Card.Title>
                                        <Card.Text>
                                            <h6 className="coloured-text">
                                                French Teacher
                                            </h6>
                                            <p>
                                                I’ve been teaching French and
                                                English for over 10 years. I’m a
                                                committed and dedicated teacher
                                                who motivates students to their
                                                maximum performance.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2020/07/428x250_Jay-Teacher.jpg.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Ibn Salam</Card.Title>
                                        <Card.Text>
                                            <h6 className="coloured-text">
                                                Arabic Teacher
                                            </h6>
                                            <p>
                                                I’ve been teaching Arabic for
                                                more than 20 years. I really
                                                love teaching and seeing how
                                                students progress over time. I’m
                                                just excited teaching now as I
                                                was then.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
