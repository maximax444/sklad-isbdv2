import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {addOrder, fetchEmp, fetchProd, fetchOrders, fetchOrdered} from "../http/userAPI";
import {Button, Container, Form, Table} from "react-bootstrap";

const Orders = observer(() => {
    const [d1, setD1] = useState('')
    const [d2, setD2] = useState('')
    const [client, setClient] = useState('')
    const [emp, setEmp] = useState(1)
    const [empl, setEmpl] = useState([])
    const [prods, setProd] = useState([])
    const [prodsl, setProdl] = useState([])
    const [orders, setOrders] = useState([])
    const [ordered, setOrdered] = useState([])
    let stat = 0;

    const [checkedState, setCheckedState] = useState(
        new Array(555).fill(false)
    );

    console.log( prods)
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        let arr = []
        const updatedProd = checkedState.map((item, index) => {

            if (item) {
                arr = [...arr, index]
            }
        }
        );


        setProd(arr);

    };


    const newOrder = async () => {
        handleOnChange(554)
        const response = await addOrder(prods, client, emp, d1, d2)
        stat++;
    }
    useEffect(() => {
        fetchEmp().then(data => {
            setEmpl(data.rows)
        })
    }, [stat])
    useEffect(() => {
        fetchProd().then(data => {
            setProdl(data.rows)
        })
    }, [stat])
    useEffect(() => {
        fetchOrders().then(data => {
            setOrders(data.rows)
        })
    }, [stat])
    useEffect(() => {
        fetchOrdered().then(data => {
            setOrdered(data.rows)
        })
    }, [stat])
    return (
        <Container>
            <br/><br/><br/>
            <h1>
                Заказы на отгрузку
            </h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Товары</th>
                    <th>Клиент</th>
                    <th>Ответственный сотрудник</th>
                    <th>Дата отправки</th>
                    <th>Дата прибытия</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(emp =>
                    <tr>
                        <td>{emp.id}</td>
                        <td>
                            {ordered.map(emp3 =>
                                {
                                    if (emp.id == emp3.id_orders) {
                                        let staticProds = '';
                                        {prodsl.map(emp5 =>
                                            {

                                                if (emp3.id_product == emp5.id) {
                                                    staticProds += emp5.name  + ", ";
                                                    return '';
                                                }

                                            }
                                        )}

                                        return staticProds;
                                    }

                                }
                            )}
                        </td>
                        <td>{emp.id_client}</td>
                        <td>
                            {empl.map(emp2 =>
                                {
                                    if (emp.id_employees == emp2.id) {
                                        return emp2.first_name;
                                    }
                                }
                            )}
                        </td>
                        <td>{emp.shipping_date}</td>
                        <td>{emp.departure_date}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <br/>
            <br/><br/><br/><br/><br/>
            <h2>Новый заказ</h2>

            <Form onSubmit={newOrder}>

                <Form.Group className="mb-3">
                    <Form.Label>Товары</Form.Label>
                        {prodsl.map((emp, index) =>
                            <div className="mb-3">
                                <Form.Check
                                    type='checkbox'
                                    value={emp.id}
                                    name='pp'
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                {emp.name}
                            </div>
                        )}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Клиент" required
                                  value={client}
                                  onChange={e => setClient(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ответственный сотрудник</Form.Label>
                    <Form.Select onChange={e => setEmp(e.target.value)}>
                        {empl.map(emp =>
                            <option value={emp.id}>{emp.first_name}</option>
                        )}

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Дата отправки</Form.Label>
                    <Form.Control type="date" placeholder="Срок годности" required
                                  value={d1}
                                  onChange={e => setD1(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Дата прибытия</Form.Label>
                    <Form.Control type="date" placeholder="Срок годности" required
                                  value={d2}
                                  onChange={e => setD2(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </Container>


    );
});

export default Orders;