import React from 'react'
import FooterAluno from '../../components/footeraluno';
import HeaderAluno from '../../components/headeraluno';
import {Container, Jumbotron, Table, Form, FormControl, Button, Col, Row, Nav} from 'react-bootstrap'

const Ranking = () => {
    return (
        <div>
            <HeaderAluno />
            <Jumbotron>
                <Container>
                    <Row>
                    <Col></Col>
                    <Col>
                    <Nav> 
                        <Form inline>
                            <FormControl type="text" placeholder="Nome Completo" className=" mr-sm-2" />
                            <Button variant='success' type="submit">Buscar</Button>
                        </Form>
                    </Nav>
                    </Col>
                    <Col></Col>
                    </Row>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                            <th>Posição</th>
                            <th>Nome</th>
                            <th>Turma</th>
                            <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Bruno</td>
                            <td>Turma B</td>
                            <td>9,0</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Yan</td>
                            <td>Turma A</td>
                            <td>8,7</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Fernando</td>
                            <td>Turma A</td>
                            <td>10,0</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Jumbotron>
            <FooterAluno />
        </div>
    )
}

export default Ranking