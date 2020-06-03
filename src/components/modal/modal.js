import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form } from 'react-bootstrap'
import * as S from './style';




export default function ModalExpenses(props) {
    const [currency, setCurrency] = useState("BRL");


    function localStringToNumber( s ){
        return Number(String(s).replace(/[^0-9.-]+/g,""))
      }
      function onFocus(e){
        let value = e.target.value;
        e.target.value = value ? localStringToNumber(value) : ''
      }
      function onBlur(e){
        let value = e.target.value
        let options = {
            maximumFractionDigits : 2,
            currency              : currency,
            style                 : "currency",
            currencyDisplay       : "symbol"
        }
        
        e.target.value = value 
          ? localStringToNumber(value).toLocaleString(undefined, options)
          : ''
      }


    return(
        <S.ContainerModal show={props.show}>
             <Modal.Header >
                <S.Title>Novos Lançamentos</S.Title>
                <S.IconClose onClick={props.onHide}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                <Row>
                <Col xs={6}>
                    <S.StyledInput type="text" placeholder="Nova categoria" />
                </Col>
                <Col xs={6}>
                            <Form.Control as="select" value="tipo">
                            <option>Tipo</option>
                            <option>Crédito</option>
                            <option>Débito</option>
                             </Form.Control>  
                </Col>
                </Row>
                <Row>
                    <Col xs={7}>
                        <S.StyledInput type="text" placeholder="Nome" />
                    </Col>
                    <Col xs={5}>
                        <S.StyledInput type="currency" placeholder="Valor" onFocus={onFocus} onBlur={onBlur}/>
                    </Col>
                    <Col xs={12}>
                        <Form.Control height="10vh" as="textarea" aria-label="With textarea" placeholder="Descrição"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3}>
                        <S.StyledButton variant="primary" size="sm">Cadastrar</S.StyledButton>{' '}
                    </Col>
                </Row>
                
            </Form>
            </Modal.Body>

        </S.ContainerModal>
    )
}