import React, { useEffect } from 'react';
import * as S from './style';
import { Col, Row } from 'react-bootstrap';
import Api from '../../services/api';


export default function Lista(props) {
    
   
    useEffect( () => {
        
    
     }, []);


     function maskPrice(valor) {
        let newValue = `${parseFloat(valor).toFixed(2)}`
            .replace(/\D/g, "")
            .replace(/(\d)(\d{2})$/, "$1,$2")
            .replace(/(?=(\d{3})+(\D))\B/g, ".")
            return `${newValue}`;
    
    }

    async function deleteBilling(id) {
          await Api.delete(`/billing/${id}`);
            props.callList();
    }

    function formatDate(date) {
        let dateArray = date.split("-");
        return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
    }
    

    return(
        <S.ContainerList>
            <Row>
                <Col  xs={2}>
                    <S.Title>Tipo</S.Title>
                </Col>
                <Col  xs={3}>
                    <S.Title>Descrição</S.Title>
                </Col>
                <Col  xs={2}>
                    <S.Title>Valor</S.Title>
                </Col>
                <Col  xs={2}>
                    <S.Title>Data</S.Title>
                </Col>
                <Col  xs={2}>
                    <S.Title>Remetente</S.Title>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <S.Line />
            { props.items.length > 0 && (props.items.map((e,i) => {
                return (
                    <S.RowColor xs={1} backgroundLine={i % 2 === 0} title="Clique duas vezes para editar" >
                    <Col  xs={2}>
                        <S.Items onDoubleClick={() => {props.handleShow(); props.edition(e.id)}}>{e.type}</S.Items>
                    </Col>
                    <Col  xs={3}>
                        <S.Items onDoubleClick={() => {props.handleShow(); props.edition(e.id)}}>{e.description}</S.Items>
                    </Col>
                    <Col  xs={2}>
                        <S.ItemValue onDoubleClick={() => {props.handleShow(); props.edition(e.id)}} credit={e.type === "credito" ? true : false }>{e.type === "credito" ? "R$ " : "R$ -"}{maskPrice(e.amount)}</S.ItemValue>
                    </Col>
                    <Col  xs={2}>
                        <S.Items onDoubleClick={() => {props.handleShow(); props.edition(e.id)}}>{formatDate(e.date)}</S.Items>
                    </Col>
                    <Col  xs={2}>
                        <S.Items onDoubleClick={() => {props.handleShow(); props.edition(e.id)}}>{e.user}</S.Items>
                    </Col>
                   <Col xs={1}>
                        <S.IconDelete onClick={() => {deleteBilling(e.id)}}/>
                   </Col>
                </S.RowColor>
                
                )
            })

            )}

           
        </S.ContainerList>
    )
}