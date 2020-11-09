import React, { useEffect, useStates } from 'react';
import FooterAluno from '../../components/footeraluno/index';
import HeaderAluno from '../../components/headeraluno/index';
import { Jumbotron, Button, Table, Form } from 'react-bootstrap';
import {url} from '../../utils/constants';

const CrudTurma = () => {

    const [idTurma, setIdTurma] = useStates(0);
    const [descricao, setDescricao] = useStates('');
    const [idCurso, setIdCurso] = useStates(0);
    const [alunoTurma, setAlunoTurma] = useStates('');
    const [professorTurma, setProfessorTurma] = useStates('');
    const [turmas, setTurmas] = useStates([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {

        fetch(url + '/Turma')
            .then(response => response.json())
            .then(data => {
                setTurmas(data.data)
                console.log(data.data);
            })
            .catch(err => console.error(err));
    }


    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/Turma' + '/' + event.target.value,{
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            console.log(dados);

            this.setState({idTurma : dados.IdTurma});
            this.setState({descricao : dados.descricao});
            this.setState({idCurso : dados.IdCurso});
            this.setState({AlunoTurma : dados.AlunoTurma});
            this.setState({ProfessorTurma : dados.ProfessorTurma});
        })

    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/Turma' + '/' + event.target.value, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Turma removida');
                listar();
            });

        console.log(event.target.value)
    }    


    const salvar = (event) => {
        event.preventDefault();

        const turmas = {
            idTurma : idTurma,
            descricao : descricao,
            idCurso : idCurso,
            alunoTurma : alunoTurma,
            professorTurma : professorTurma
        }

        let method = (idTurma === '' ? 'POST' : 'PUT')
        let urlRequest = (idTurma === '' ? url + '/Turma' : url + '/Turma' + '/' + idTurma);

        fetch(urlRequest, {
            method : method,
            body: JSON.stringify(turmas),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Turma cadastrado');
            listar();
        })
        .catch(err => console.error(err))
    }
    


    return (
        <div >
            <HeaderAluno />
            <Jumbotron>
                <div className="container">
                    <h1>Turmas</h1>
                    <p>
                        Cadastre uma turma aqui
                </p>

                </div>
            </Jumbotron>
            <div className="container">
                <Form>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Selecioe o ID da Turma em que voce deseja alterar algo</Form.Label>
                        <Form.Control as="select" value={idTurma} onChange={event => setIdTurma(parseInt(event.target.value))} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Descricao</Form.Label>
                        <Form.Control type="text" placeholder="Digite aqui a descriçao" value={descricao} onChange={event => setDescricao(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>IdCurso</Form.Label>
                        <Form.Control as="select" value={idCurso} onChange={event => setIdCurso(parseInt(event.target.value))} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>AlunoTurma</Form.Label>
                        <Form.Control as="select" value={alunoTurma} onChange={event => setAlunoTurma(event.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>ProfessorTurma</Form.Label>
                        <Form.Control as="select" value={professorTurma} onChange={event => setProfessorTurma(event.target.value)} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={event => salvar(event)}>
                        Cadastrar
            </Button>
                </Form>

                <Table striped bordered hover size="sm" style={{ marginTop: '50px' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>descriçao</th>
                            <th>AlunoTurma</th>
                            <th>ProfessorTurma</th>
                            <th>Açoes</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            turmas.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.idTurma}</td>
                                        <td>{item.descricao}</td>
                                        <td>{item.alunoTurma}</td>
                                        <td>{item.professorTurma}</td>
                                        <td>
                                            <button type='button' value={item.id} onClick={remover} className='btn btn-danger'>Remover</button>
                                            <button type='button' value={item.id} onClick={editar} className='btn btn-warning'>Editar</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </Table>
            </div>

            <FooterAluno />
        </div>
    )
}
export default CrudTurma;