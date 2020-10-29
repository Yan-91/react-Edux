import React from 'react';
import  HeaderAluno  from '../../components/headeraluno';
import  FooterAluno  from '../../components/footeraluno';
import {  Container, Form, Button } from 'react-bootstrap';
const Login = () => {



return (
    <div>
        < HeaderAluno/>
         <Container className='form-height'>
         <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Coloque seu email" />
    <Form.Text className="text-muted">
    Nunca compartilharemos seu e-mail com mais ninguém.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Senha" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Manter Login" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Logar
  </Button>
</Form>
         </Container>
         < FooterAluno/>
    </div>
)
}
export default Login;