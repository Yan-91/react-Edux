import React from 'react';
import { Carousel, Jumbotron, Container, Row, Col, Image, Card, Button, Nav } from 'react-bootstrap';
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
                            <h4>Conheça a plataforma Edux</h4>
                            <Button variant="success">Saiba mais
                            <Nav.Link href="/saibaMais" ></Nav.Link>
                            </Button>
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
                            <h4>Cumpra objetivos para ganhar pontos</h4>
                            <Button variant="success" > Objetivo 
                            <Nav.Link href="/objetivos" ></Nav.Link>
                            </Button>
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
                            <h4>Faça parte de turmas</h4>
                            <Button variant="success">Turmas
                            <Nav.Link href="/turmas" ></Nav.Link>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Jumbotron>
        <Container>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Objetivo</Card.Title>
                <Card.Text>
                    Descrição objetivo
                </Card.Text>
                <Button variant="primary">Dicas</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Objetivo</Card.Title>
                <Card.Text>
                    Descrição objetivo
                </Card.Text>
                <Button variant="primary">Dicas</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Objetivo</Card.Title>
                <Card.Text>
                    Descrição objetivo
                </Card.Text>
                <Button variant="primary">Dicas</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        <FooterAluno />
        </div>
    )
}

export default Home;