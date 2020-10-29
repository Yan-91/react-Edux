import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



const HeaderAluno = () => {
    <Navbar bg="primary" variant="light">
    <Navbar.Brand href="#home">EduX</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Ranking</Nav.Link>
      <Nav.Link href="#pricing">Conquistas</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>


}

export default HeaderAluno;