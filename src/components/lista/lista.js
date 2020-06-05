import React from 'react';
import { ContainerList, Title, Line } from './style';
import { Col, Row } from 'react-bootstrap';

export default function Lista() {
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
            <Row>
                <Col xs={1}>
                   <p></p>
                </Col>
                <Col  xs={2}>
                    <p></p>
                </Col>
                <Col  xs={3}>
                    <p></p>
                </Col>
                <Col  xs={2}>
                    <p></p>
                </Col>
                <Col  xs={2}>
                    <p></p>
                </Col>
                <Col  xs={2}>
                    <p></p>
                </Col>
            </Row>
        </ContainerList>
    )
}