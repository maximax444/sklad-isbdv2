import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {addSup, fetchSup} from "../http/userAPI";
import {Button, Container, Form, Table} from "react-bootstrap";

const Suppliers = observer(() => {
    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [sups, setSup] = useState([])
    let stat = 0;
    const newSup = async () => {
        const response = await addSup(name,adress,phone)
        stat++;
    }
    useEffect(() => {
        fetchSup().then(data => {
            setSup(data.rows)
        })
    }, [stat])
    return (
        <Container>
            <br/><br/><br/>
            <h1>
                Поставщики
            </h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>adress</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {sups.map(emp =>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td>{emp.number_phone}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <br/>
            <br/><br/><br/><br/><br/>
            <h2>Добавить поставщика</h2>

            <Form onSubmit={newSup}>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Имя" required
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                    />
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

export default Suppliers;