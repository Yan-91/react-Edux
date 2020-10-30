import React from 'react';
import { Carousel, Jumbotron, Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import FooterAluno from '../../components/footeraluno';
import HeaderAluno from '../../components/headeraluno';
import foto1 from '../../assets/img/escola.jpg';
import foto2 from '../../assets/img/objetivos.jpg';
import foto3 from '../../assets/img/turmas.jpg';

const Home = () => {
    return(
        <div>
        <HeaderAluno />
        <Jumbotron fluid>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                        <Col></Col>
                        <Image rounded
                            src={foto1} 
                            alt="First slide"
                            width={600}
                            height={300}
                        />
                        <Col></Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row>
                        <Col></Col>
                        <Image rounded
                            src={foto2}
                            alt="First slide"
                            width={600}
                            height={300}
                        />
                        <Col></Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row>
                        <Col></Col>
                        <Image rounded
                            src={foto3}
                            alt="First slide"
                            width={600}
                            height={300}
                        />
                        <Col></Col>
                        </Row>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Jumbotron>
        <Container>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Container>
        <FooterAluno />
        </div>
    )
}

export default Home;