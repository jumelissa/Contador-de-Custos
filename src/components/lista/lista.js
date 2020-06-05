import React, { useEffect, useState } from 'react';
import { ContainerList, Title, Line, Items } from './style';
import { Col, Row } from 'react-bootstrap';
import Api from '../../services/api';

export default function Lista() {
    const [items, setItems] = useState([]);

    useEffect( () => {
        
    Api.get(`/billing`).then((data) => {
        setItems(data.data);
    });
        

     }, []);




    return(
        <ContainerList>
            <Row>
                <Col xs={1}>
                    <Title>ID</Title>
                </Col>
                <Col  xs={2}>
                    <Title>Tipo</Title>
                </Col>
                <Col  xs={3}>
                    <Title>Descrição</Title>
                </Col>
                <Col  xs={2}>
                    <Title>Valor</Title>
                </Col>
                <Col  xs={2}>
                    <Title>Data</Title>
                </Col>
                <Col  xs={2}>
                    <Title>Remetente</Title>
                </Col>
            </Row>
            <Line />
            { items.length > 0 && (items.map((e) => {
                return (
                    <Row>
                    <Col xs={1}>
                      <Items>{e.id}</Items>
                    </Col>
                    <Col  xs={2}>
                        <Items></Items>
                    </Col>
                    <Col  xs={3}>
                        <Items>{e.description}</Items>
                    </Col>
                    <Col  xs={2}>
                        <Items>{e.amount}</Items>
                    </Col>
                    <Col  xs={2}>
                        <Items></Items>
                    </Col>
                    <Col  xs={2}>
                        <Items>{e.user}</Items>
                    </Col>
                </Row>
                )
            })

            )}
           
        </ContainerList>
    )
}