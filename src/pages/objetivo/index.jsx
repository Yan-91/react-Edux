import React from 'react'
import FooterAluno from '../../components/footeraluno';
import HeaderAluno from '../../components/headeraluno';
import {Container, Form, FormControl, Button, Col, Row, Card} from 'react-bootstrap'
import './index.css';

const Objetivos = () => {
    return (
        <div>
            <HeaderAluno />
                <Form className='form-signin'>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="nome" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="descricao" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="nota" placeholder="name@example.com" />
                </Form.Group>
                </Form>
            <Container>
            <Row>
                 <Col>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                 </Col>
                 <Col>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                 </Col>        
                </Row>
            </Container>
            <FooterAluno /> 
        </div>
    )
}

export default Objetivos;
