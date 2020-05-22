import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {Container, StyledInput, StyledButton, StyledChek, Cadastro, StyledInputCadastro, StyledInputGroup, StyledButtonCadastrar } from "./style";
import logo from '../../assets/image/Caminho 1.jpg';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { moment } from 'react-moment';


export default function Login() {
   const [login, setLogin]= useState(true);
   const [cadastro, setCadastro]= useState(false);
   const [email, setEmail]= useState("");
   const [password, setPassword]= useState("");
   

   function toggleCadastro() {
      setLogin(false)
   }

   function toggleLogin() {
      setLogin(true)
   }

   function validationEmail(e) {
        setEmail(e.target.value);
        console.log(email);
   }

   function validationPassword(e) {
         setPassword(e.target.valeu);
         console.log(password);
   }

    return(
       <Container>
          <aside></aside>

          <section>
               <img src={ logo }/>
            {  login && (
                  <>
               <h2>Efetue o login</h2>
               <p>Please login to continue using dribbble.</p>
               <Form>
                  <Col>
                     <Row>
                        <StyledInput placeholder="Email" onChange={validationEmail}/>
                     </Row>

                     <Row>
                        <StyledInput placeholder="Password" onChange={validationPassword}/>
                      </Row>

                      <Row>
                        <StyledChek type="radio" label="lembrar-me" name="formHorizontalRadios" id="formHorizontalRadios3"/>
                        <span>Recuperar Senha</span>
                      </Row>

                      <Row>
                        <StyledButton variant="" size="lg" active>Entrar</StyledButton>{''}
                      </Row>

                      <Row>
                        <StyledButton variant="" size="lg" active onClick={toggleCadastro}>Cadastre-se</StyledButton>{' '}
                      </Row>

                  </Col>
               </Form>
               </>
            )}

            { !login && (
                        <Cadastro>
                           <h2>Cadastre-se</h2>
                           <p>Please login to continue using dribbble.</p>

                           <Form>
                          
                           <Col>
                           <Row>
                              <StyledInputCadastro placeholder="Nome" />
                           </Row>

                           <Row>
                            <StyledInputCadastro placeholder="Email" />
                           </Row>
                           </Col>

                              <Row>
                                 <Col>
                                    <StyledInputGroup placeholder="000.000.000-00" />
                                 </Col>

                                 <Col>
                                    <StyledInputGroup placeholder="RG" />
                                 </Col>
                              </Row>

                              
                              <Row>
                                 <Col>
                                    <StyledInputGroup placeholder="Senha" />
                                 </Col>

                                 <Col>
                                    <StyledInputGroup placeholder="Repita a senha" />
                                 </Col>
                              </Row>


                              <Row>
                                 <StyledButtonCadastrar variant="" size="lg" active onClick={toggleLogin}>Cadastrar</StyledButtonCadastrar>{''}
                              </Row>
                              
                              
                           </Form>
      
                        </Cadastro>
               
            )

            }
            </section>

            
       </Container>
    )
}

