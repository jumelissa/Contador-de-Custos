import React, { useState } from 'react';
import image from '../../assets/image/Grupo 10473.png';
import currencygren from '../../assets/image/rvx2.png';
import currencyred from '../../assets/image/rve2x.png';
import person from '../../assets/image/ic_people_24px@2x.png';
import { Containermain, Line, Dashboard, Received, Costs, Balance, Month, IconOpenModal, FormModal } from "./style";
import { Col, Row, Modal, FormControl, Form, Button } from 'react-bootstrap';
import { AiOutlineClose, AiFillPlusCircle } from 'react-icons/ai';





export default function Main() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    



    return(
    
        <Containermain>
                <header>
                    <img src={ image } />
                    <Line />
                </header>
                <Dashboard>
                    <p>Dashboard</p>
                    <button>Sair</button>
                </Dashboard>

               <section>
                   <aside></aside>

                   <main>
                        
                            <Row>
                                <Col xs={2}>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" value="Choose...">
                            <option>Data</option>
                            <option>...</option>
                             </Form.Control>
                            </Form.Group>
                                </Col>
                            </Row>
                    
                       
                       <Row>
                           <Col xs={3}>
                                <Received>
                                    <h5>Recebidos</h5>
                                    <img src={ currencygren } />
                                    <p>3.000,00</p>
                                </Received>
                                
                           </Col>
                           <Col xs={3}>
                                <Costs>
                                    <h5>Custos</h5>
                                    <img src={ currencyred } />
                                    <p>200,00</p>
                                </Costs>
                                
                           </Col>
                           <Col xs={3}>
                                <Balance>
                                    <h5>Saldo</h5>
                                    <img src={ currencygren } />
                                    <p>2.800,00</p>
                                </Balance>
                                
                           </Col>
                           <Col xs={3}>
                                <Month>
                                    <h5>Entrada/mês</h5>
                                    <img src={ person } />
                                    <p>90</p>
                                </Month>
                           </Col>
                       </Row>

                       <Row>
                           <Col xs={11}>
                           <h2>Movimentações</h2>
                           </Col>

                           <Col xs={1}>
                           <IconOpenModal onClick={handleShow}/>
                           </Col>
                       </Row>
                   </main>
               </section>
              <Modal show={show} onHide={handleClose}>
                  <FormModal>
                        <h5>Novos Lançamentos</h5>
                      
                      <div>
                        <AiOutlineClose onClick={handleClose}/>
                      </div>
                      <Row>
                          <Col>
                                <Form.Control type="text" placeholder="Categoria" />
                          </Col>

                          <Col>
                                <Form.Control type="text" placeholder="Tipo" />
                          </Col>
                      </Row>

                      <Row>
                          <Col>
                                <Form.Control type="text" placeholder="Nome" />
                          </Col>

                          <Col>
                                <Form.Control type="text" placeholder="Valor" />
                          </Col>
                      </Row>

                      <Row>
                            <Form.Control type="text" placeholder="Descrição" />
                      </Row>
                      <Button variant="">Atualizar</Button>{' '}
                  </FormModal>
                  
               
              </Modal>
        </Containermain>
        
    )
}

