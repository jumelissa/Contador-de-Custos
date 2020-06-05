import React, { useState, useEffect } from 'react';
import image from '../../assets/image/Grupo 10473.png';
import currencygren from '../../assets/image/rvx2.png';
import currencyred from '../../assets/image/rve2x.png';
import person from '../../assets/image/ic_people_24px@2x.png';
import * as S from "./style";
import { Col, Row, FormControl, Form } from 'react-bootstrap';
import ModalExpenses from "../../components/modal/modal";
import { useHistory } from 'react-router-dom';
import Api from '../../services/api';
import Lista from '../../components/lista/lista';





export default function Main() {
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        if(sessionStorage.getItem("users_id") === null) {
            return history.push("/");
        }
     }, []);


    
function signOut() {
        sessionStorage.clear()
        return history.push("/");
}




    return(
    
        <S.Containermain>
                <header>
                    <img src={ image } />
                    <S.Line />
                </header>
                <S.Dashboard>
                    <p>Dashboard</p>
                    <button onClick={signOut}>Sair</button>
                </S.Dashboard>

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
                                <S.Values border="1px solid #0DC380">
                                    <h5>Recebidos</h5>
                                    <img src={ currencygren } />
                                    <S.Value color="#0DC380">3.000,00</S.Value>
                                </S.Values>
                                
                           </Col>
                           <Col xs={3}>
                           <S.Values border="1px solid #DC0F0F">
                                    <h5>Custos</h5>
                                    <img src={ currencyred } />
                                    <S.Value color="#DC0F0F">200,00</S.Value>
                                </S.Values>
                                
                           </Col>
                           <Col xs={3}>
                           <S.Values border="1px solid #2612AF">
                                    <h5>Saldo</h5>
                                    <img src={ currencygren } />
                                    <S.Value color="#2612AF">2.800,00</S.Value>
                                </S.Values>
                                
                           </Col>
                           <Col xs={3}>
                           <S.Values border="1px solid #F59324">
                                    <h5>Entrada/mês</h5>
                                    <img src={ person } />
                                    <S.Value color="#F59324">90</S.Value>
                                </S.Values>
                           </Col>
                       </Row>

                       <Row>
                           <Col xs={11}>
                           <h2>Movimentações</h2>
                           </Col>

                           <Col xs={1}>
                           <S.IconOpenModal onClick={handleShow}/>
                           </Col>
                           <Col xs={12}>
                                <Lista />
                           </Col>
                       </Row>
                   </main>
               </section>
              
              <ModalExpenses show={show} onHide={handleClose}/>
              
        </S.Containermain>
        
    )
}

