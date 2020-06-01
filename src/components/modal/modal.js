import React from 'react'
import { Modal, Col, Row, Form, Button } from 'react-bootstrap'
import { Title, IconClose, StyledInput, StyledButton } from './style';



export default function ModalExpenses(props) {
    

    return(
        <Modal show={props.show}>
            
             <Modal.Header >
                <Title>Novos Lançamentos</Title>
                <IconClose onClick={props.onHide}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                <Row>
                <Col xs={6}>
                    <Form.Control type="text" placeholder="Categoria" />
                </Col>
                <Col xs={6}>
                <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" value="Choose...">
                            <option>Tipo</option>
                            <option>Crédito</option>
                            <option>Débito</option>
                             </Form.Control>
                            </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col xs={7}>
                        <StyledInput type="text" placeholder="Nome" />
                    </Col>
                    <Col xs={5}>
                        <StyledInput type="text" placeholder="Valor" />
                    </Col>
                    <Col xs={12}>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder="Descrição"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3}>
                        <StyledButton variant="primary" size="sm">Cadastrar</StyledButton>{' '}
                    </Col>
                </Row>
                
            </Form>
            </Modal.Body>

        </Modal>
    )
}