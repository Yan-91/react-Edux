import React from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import FooterAluno from '../../components/footeraluno';
import HeaderAluno from '../../components/headeraluno';
import './index.css';

const Cadastro = () => {
    return (
        <div>
            <HeaderAluno />
            <Container>
            <Form>
            <Form.Group controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="name" placeholder="Nome completo" />
                    <Form.Text className="text">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Insira seu Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Insira sua Senha" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Cadastrar
                </Button>
                </Form>
            </Container>
            <FooterAluno />
        </div>
    )
}

export default Cadastro;