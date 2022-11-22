import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {addProd, fetchProd, fetchSup} from "../http/userAPI";
import {Button, Container, Form, Table} from "react-bootstrap";

const Products = observer(() => {
    const [supl, setSupl] = useState([])
    const [sup, setSup] = useState(1)
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [bbd, setBbd] = useState('')
    const [mc, setMc] = useState('')
    const [mn, setMn] = useState('')
    const [prods, setProd] = useState([])
    let stat = 0;
    const newProd = async () => {
        const response = await addProd(sup, name, brand, price, bbd, mc, mn)
        stat++;
    }
    useEffect(() => {
        fetchSup().then(data => {
            setSupl(data.rows)
        })
    }, [stat])
    useEffect(() => {
        fetchProd().then(data => {
            setProd(data.rows)
        })
    }, [stat])
    return (
        <Container>
            <br/><br/><br/>
            <h1>
                Товары на складе
            </h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Поставщик</th>
                    <th>Бренд</th>
                    <th>Цена</th>
                    <th>Срок годности</th>
                    <th>Страна производства</th>
                    <th>Производитель</th>
                </tr>
                </thead>
                <tbody>
                {prods.map(emp =>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>
                        {supl.map(emp2 =>
                            {
                                if (emp.id_suppliers == emp2.id) {
                                    return emp2.name;
                                }
                            }
                        )}
                        </td>
                        <td>{emp.brand}</td>
                        <td>{emp.price}</td>
                        <td>{emp.best_before_date}</td>
                        <td>{emp.manufacturers_country}</td>
                        <td>{emp.manufacrurers_name}</td>
                    </tr>
                )}
                </tbody>
            </Table>


            <br/>
            <br/><br/><br/><br/><br/>
            <h2>Поставка</h2>

            <Form onSubmit={newProd}>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Название" required
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Поставщик</Form.Label>
                    <Form.Select onChange={e => setSup(e.target.value)}>
                        {supl.map(emp =>
                            <option value={emp.id}>{emp.name}</option>
                        )}

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Бренд" required
                                  value={brand}
                                  onChange={e => setBrand(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="tel" placeholder="Цена" required
                                  value={price}
                                  onChange={e => setPrice(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Срок годности</Form.Label>
                    <Form.Control type="date" placeholder="Срок годности" required
                                  value={bbd}
                                  onChange={e => setBbd(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="tel" placeholder="Страна производства" required
                                  value={mc}
                                  onChange={e => setMc(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="tel" placeholder="Производитель" required
                                  value={mn}
                                  onChange={e => setMn(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </Container>

    );
});

export default Products;