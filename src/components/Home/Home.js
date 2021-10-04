import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardImg, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="bg-img">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1 className="text-white mb-2 large-text">
                                Language for life
                            </h1>
                            <p className="text-white my-4 fs-4">
                                Speak a language in 10 minutes a day
                            </p>
                            <button className="btn-regular mt-2">
                                Get Started For Free
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <div className="">
                    <Row mt={5} className="text-center">
                        <h2 className="text-center my-5 fs-1">
                            Why <span className="feauterd-text">Fitlang</span>
                        </h2>
                        <Col lg={3}>
                            <h4 className="my-4">Designed by pros</h4>
                            <p>
                                Lessons with realistic scenarios designed by
                                over 100 linguists.
                            </p>
                        </Col>
                        <Col lg={3}>
                            <h4 className="my-4">Use what you learn</h4>
                            <p>
                                Interactive dialogues that get you speaking
                                confidently.
                            </p>
                        </Col>
                        <Col lg={3}>
                            <h4 className="my-4">Learn on any device</h4>
                            <p>
                                Compatibility with most devices, with lessons
                                that are only 10-15 min.
                            </p>
                        </Col>
                        <Col lg={3}>
                            <h4 className="my-4">Remember everything</h4>
                            <p>
                                Reviews that bring back everything you’ve
                                learned.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="mt-5">
                    <Row mt={5} className="text-center">
                        <h2 className="text-center my-5 fs-1">
                            Our <span className="feauterd-text">Features</span>
                        </h2>
                        <Col lg={4}>
                            <img
                                src="https://www.lingoda.com/wp-content/uploads/2021/01/210107_method-page-illus_final_vv.svg"
                                alt=""
                            />
                            <h4 className="">Real-life examples</h4>
                            <p>
                                Our lessons are filled with easy to learn
                                examples from real-life situations, which can be
                                applied from day 1.
                            </p>
                        </Col>
                        <Col lg={4}>
                            <img
                                src="https://www.lingoda.com/wp-content/uploads/2021/02/210224_method-page-illus_final_illustraion_2_EN.svg"
                                alt=""
                            />
                            <h4 className="">Real-life topics</h4>
                            <p>
                                Our topics are action-oriented and based on
                                everyday situations so that you’re always
                                learning relevant vocabulary.
                            </p>
                        </Col>
                        <Col lg={4}>
                            <img
                                src="https://www.lingoda.com/wp-content/uploads/2021/01/210107_method-page-illus_final_illustraion_3.svg"
                                alt=""
                            />
                            <h4 className="">Real-life language</h4>
                            <p>
                                Our focus is on teaching you natural sounding
                                language that will help you communicate easily
                                with locals.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="mt-5">
                    <Row>
                        <h1 className="fs-1 text-center mb-5">
                            Our <span className="feauterd-text">Services</span>
                        </h1>
                        <Col lg={6}>
                            <h3 className="fs-3 mb-3">
                                Our high-frequency courses accelerate your
                                progress
                            </h3>
                            <p>
                                We promise that if you commit to building a
                                regular habit of learning, you will progress
                                faster towards fluency. And from beginner to
                                advanced, we’ll be with you every step of the
                                way. See our table below for a clear guide on
                                your potential progression.
                            </p>
                            <p>
                                <ul>
                                    <li>
                                        In 2.5 months with 5 classes per week
                                    </li>
                                    <li>In 4 months with 3 classes per week</li>
                                    <li>In 12 months with 1 class per week</li>
                                </ul>
                            </p>
                        </Col>
                        <Col lg={6} className="d-flex">
                            <Col sm={6}>
                                <Card
                                    style={{
                                        width: '15rem',
                                        border: '2px solid springgreen',
                                    }}
                                >
                                    <CardImg
                                        style={{
                                            borderRadius: '10px',
                                            padding: '10px',
                                        }}
                                        variant="top"
                                        src="https://www.worldometers.info/img/flags/small/tn_uk-flag.gif"
                                        thumbnail
                                    />
                                    <Card.Body className="text-center">
                                        <Button className="btn-regular">
                                            Learn English
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <Card
                                    style={{
                                        width: '15rem',
                                        border: '2px solid springgreen',
                                    }}
                                    className="mt-2"
                                >
                                    <CardImg
                                        style={{
                                            borderRadius: '10px',
                                            padding: '10px',
                                        }}
                                        variant="top"
                                        src="https://www.worldometers.info/img/flags/small/tn_bg-flag.gif"
                                        thumbnail
                                    />
                                    <Card.Body className="text-center">
                                        <Button className="btn-regular">
                                            Learn English
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card
                                    style={{
                                        width: '15rem',
                                        border: '2px solid springgreen',
                                    }}
                                >
                                    <CardImg
                                        style={{
                                            borderRadius: '10px',
                                            padding: '10px',
                                        }}
                                        variant="top"
                                        src="https://www.worldometers.info/img/flags/small/tn_sp-flag.gif"
                                        thumbnail
                                    />
                                    <Card.Body className="text-center">
                                        <Button className="btn-regular">
                                            Learn Spanish
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <Card
                                    style={{
                                        width: '15rem',
                                        border: '2px solid springgreen',
                                    }}
                                    className="mt-2"
                                >
                                    <CardImg
                                        style={{
                                            borderRadius: '10px',
                                            padding: '10px',
                                        }}
                                        variant="top"
                                        src="https://www.worldometers.info/img/flags/small/tn_gm-flag.gif"
                                        thumbnail
                                    />
                                    <Card.Body className="text-center">
                                        <Button className="btn-regular">
                                            Learn English
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Home;
