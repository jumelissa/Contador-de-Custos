import React from 'react';
import image from '../../assets/image/Grupo 10473.png';
import currencygren from '../../assets/image/rvx2.png';
import currencyred from '../../assets/image/rve2x.png';
import person from '../../assets/image/ic_people_24px@2x.png';
import { Containermain, Line, Dashboard, Received, Costs, Balance, Month} from "./style";
import { Col, Row } from 'react-bootstrap';



export default function Main() {
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
                        <Col>
                            <Row>
                                <h4>Data</h4>
                            </Row>
                        </Col>
                       
                       <Row>
                           <Col>
                                <Received>
                                    <h5>Recebidos</h5>
                                    <img src={ currencygren } />
                                    <p>3.000,00</p>
                                </Received>
                                
                           </Col>
                           <Col>
                                <Costs>
                                    <h5>Custos</h5>
                                    <img src={ currencyred } />
                                    <p>200,00</p>
                                </Costs>
                                
                           </Col>
                           <Col>
                                <Balance>
                                    <h5>Saldo</h5>
                                    <img src={ currencygren } />
                                    <p>2.800,00</p>
                                </Balance>
                                
                           </Col>
                           <Col>
                                <Month>
                                    <h5>Entrada/mês</h5>
                                    <img src={ person } />
                                    <p>90</p>
                                </Month>
                           </Col>
                       </Row>

                       <Row>
                           <Col>
                           <h2>Movimentações</h2>
                           </Col>
                       </Row>
                   </main>
               </section>
        </Containermain>
    )
}

