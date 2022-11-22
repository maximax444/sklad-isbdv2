import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Table} from "react-bootstrap";
import {addEmp, fetchEmp} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Employers = observer(() => {
    const [job, setJob] = useState('')
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [name3, setName3] = useState('')
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [emps, setEmps] = useState([])
    let stat = 0;
    const newEmp = async () => {
        const response = await addEmp(job,name1,name2,name3,adress,phone)
        stat++;
    }
    useEffect(() => {
        fetchEmp().then(data => {
            console.log(data.rows)
            setEmps(data.rows)
            console.log(emps)
        })
    }, [stat])
    return (
        <Container>
            <br/><br/><br/>
            <h1>
                Сотрудники
            </h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Должность</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Отчество</th>
                    <th>adress</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {emps.map(emp =>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.positions}</td>
                        <td>{emp.first_name}</td>
                        <td>{emp.surname}</td>
                        <td>{emp.patronymic}</td>
                        <td>{emp.address}</td>
                        <td>{emp.number_phone}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <br/>
            <br/><br/><br/><br/><br/>
            <h2>Добавить сотрудника</h2>

            <Form onSubmit={newEmp}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                        type="text"
                        placeholder="Должность"
                        required
                        value={job}
                        onChange={e => setJob(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Имя" required
                                  value={name1}
                                  onChange={e => setName1(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Фамилия" required
                                  value={name2}
                                  onChange={e => setName2(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Отчество" required
                                  value={name3}
                                  onChange={e => setName3(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Адрес" required
                                  value={adress}
                                  onChange={e => setAdress(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="tel" placeholder="Телефон" required
                                  value={phone}
                                  onChange={e => setPhone(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </Container>

    );
});

export default Employers;