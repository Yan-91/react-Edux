import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import  HeaderAluno  from '../../components/headeraluno';
import  FooterAluno  from '../../components/footeraluno';
import {  Container, Form, Button } from 'react-bootstrap';
import './index.css';

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = (event) => {
    event.preventDefault();

    fetch('http://localhost:58611/api/Login', {
      method : 'POST',
      body : JSON.stringify({
        email : email, 
        senha : senha
      }),
      headers : {
        
        'content-type' : 'application/json'
      }
    })
    .then(response => {
        if(response.ok === true){
          return response.json();
        }
        
        alert('Dados Invalidos');
        

    })
    .then(data =>  {

      localStorage.setItem('token-edux-tarde', data.token);
      
      let perfil = jwt_decode(data.token);

     

      if(perfil.role === 'Admin' )

          history.push('/admin/dashboard')
        else
        history.push('/Home');
      history.push('/Home');
    })
    .catch(err => console.err(err));

    
  }
    return (
      <div>
          <HeaderAluno/>
          <Container>
          <Form className='form-signin' onSubmit ={ event => logar(event)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" value={email} onChange={ event => setEmail(event.target.value)} placeholder="Coloque seu email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha" />
            </Form.Group>
            
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Manter Login" />
            </Form.Group>

            <Button variant="dark" type="submit" onClick={ event => logar(event)}>
                Logar
            </Button>
          </Form>
         </Container>
        < FooterAluno/>
    </div>
)
}
export default Login;
