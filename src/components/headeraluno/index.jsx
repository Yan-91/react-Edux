import React from 'react';
import { Navbar, Nav , Form, Button} from 'react-bootstrap';
import logo from '../../assets/img/logo_branco_2-8.png'

const HeaderAluno = () => {
  return(
    <Navbar bg="success" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo} alt='EDUX' style={{ width : '60px'}}/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/ranking">Ranking</Nav.Link>
        <Nav.Link href="/conquistas">Conquistas</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="#features">Cadastro</Nav.Link>
      </Nav>
      <Form inline>
        <Button bg='light' variant="dark">Search</Button>
      </Form>
  </Navbar>
  )

}

export default HeaderAluno;