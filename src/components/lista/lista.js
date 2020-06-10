import React, { useEffect, useState } from 'react';
import { ContainerList, Title, Line, Items, ItemValue, IconEdit, IconDelete } from './style';
import { Col, Row } from 'react-bootstrap';
import Api from '../../services/api';


export default function Lista(props) {
    const [items, setItems] = useState([]);

   
    useEffect( () => {
        
    Api.get(`/billing`).then((data) => {
        setItems(data.data);
    });
     }, []);


     

     function maskPrice(valor) {
        let newValue = `${parseFloat(valor).toFixed(2)}`
            .replace(/\D/g, "")
            .replace(/(\d)(\d{2})$/, "$1,$2")
            .replace(/(?=(\d{3})+(\D))\B/g, ".")
            return `${newValue}`;
    
    }
    

    return(
        <ContainerList>
            <Row>
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
                <Col xs={1}></Col>
            </Row>
            <Line />
            { items.length > 0 && (items.map((e) => {
                return (
                    <Row>
                    <Col  xs={2}>
                        <Items>{e.type}</Items>
                    </Col>
                    <Col  xs={3}>
                        <Items>{e.description}</Items>
                    </Col>
                    <Col  xs={2}>
                        <ItemValue credit={e.type === "credito" ? true : false }>{e.type === "credito" ? "R$ " : "R$ -"}{maskPrice(e.amount)}</ItemValue>
                    </Col>
                    <Col  xs={2}>
                        <Items>{e.date}</Items>
                    </Col>
                    <Col  xs={2}>
                        <Items>{e.user}</Items>
                    </Col>
                   <Col xs={1}>
                        <IconEdit onClick={() => {props.handleShow(); props.edition(e.id)}}/>
                        <IconDelete />
                   </Col>
                </Row>
                
                )
            })

            )}

           
        </ContainerList>
    )
}