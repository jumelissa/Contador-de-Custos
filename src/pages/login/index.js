import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {Container, StyledInput, StyledButton, StyledChek, Cadastro, StyledInputCadastro, StyledInputGroup, StyledButtonCadastrar, Error } from "./style";
import logo from '../../assets/image/Caminho 1.jpg';
import { Form, Col, Row } from 'react-bootstrap';




export default function Login() {
   const [login, setLogin] = useState(true);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorEmail, setErrorEmail] = useState("");
   const [errorPassword, setErrorPassword] = useState("");
   const [cpf, setCpf] = useState("");
   const [rg, setRg] = useState("");
   const [name, setName]= useState("");
   const [createPassword, setCreatePassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("");
   const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
   const [checkCpf, setCheckCpf] = useState(false);
   const [errorCpf, setErrorCpf] = useState("");

   

   function toggleCadastro() {
      setLogin(false)
   }

   function toggleLogin() {
      setLogin(true)
   }

   function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setErrorEmail("");
        return true;
      }
      setErrorEmail("Email incorreto");
      return false;
    }

   function validatePassword(password) {
      if (/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g.test(password)) {
         setErrorPassword("");
         return true;
       }
       setErrorPassword("Senha incorreta");
       return false;
   }
   

   function buttonLogin() {
   
   }

   function validateName(e) {
     
   }


   function validateCpf(cpf) {
      let newValue = cpf 
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') ;
            setCpf(newValue);
         if (cpf.length === 14) {
            setCheckCpf(cpfCorrect(cpf));
            setErrorCpf(cpfCorrect(cpf) ? "" : "Cpf Inválido");
         }

            
   }

   function cpfCorrect(cpf) {
         let cpfValid = `${cpf}`
         let sum = 0;
         let multiplier = 11;
         for(let i = 0; i < cpfValid.length -1; i++) {
            if (cpfValid[i] !== "." && cpfValid[i] !== "-") {
               sum += (parseInt(cpfValid[i]) * multiplier);
               multiplier--;
            }
         }

         sum*=10;

         if(sum%11 === parseInt(cpfValid[cpfValid.length-1])) {
            return true;
         } else {
            return false;
         }
        
   }

   function validateRg(rg) {
      let newValue = rg
         .replace(/\D/g, '')
         .replace(/(\d{1})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(-\d{3})\d+?$/, '$1');
         setRg(newValue);
   }

      function validatePasswords(e) {
         if (createPassword === confirmPassword && /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g.test(createPassword)) {
            setErrorConfirmPassword("")
            return true;
         }
         setErrorConfirmPassword("Sua senha deve ter no minímo 8 digitos contendo letras, números e caracteres especiais");
         return false;
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
                        <StyledInput type="email" value={email} onBlur={(e) => validateEmail(e.target.value)} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" />
                        {errorEmail && <Error>{errorEmail}</Error>}
                     </Row>

                     <Row>
                        <StyledInput type="password" value={password} onBlur={(e) => validatePassword(e.target.value)} onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
                        {errorPassword && <Error>{errorPassword}</Error>}
                      </Row>

                      <Row>
                        <StyledChek type="radio" label="lembrar-me" name="formHorizontalRadios" id="formHorizontalRadios3"/>
                        <span>Recuperar Senha</span>
                      </Row>

                      <Row>
                       <StyledButton type="submit" variant="" size="lg" active>Entrar</StyledButton>{' '}
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
                              <StyledInputCadastro type="text" value={name} onBlur={(e) => validateName(e.target.value)} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
                              
                           </Row>

                           <Row>
                            <StyledInputCadastro type="email" value={email} onBlur={(e) => validateEmail(e.target.value)} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                            {errorEmail && <Error>{errorEmail}</Error>}
                           </Row>
                           </Col>

                              <Row>
                                 <Col>
                                    <StyledInputGroup placeholder="000.000.000-00" name="cpf" value={cpf} required onChange={(e) => validateCpf(e.target.value)}/>
                                    {!checkCpf && <Error>{errorCpf}</Error>}
                                 </Col>
                                

                                 <Col>
                                    <StyledInputGroup placeholder="RG" maxLength="9" name="rg" value={rg} required onChange={(e) => validateRg(e.target.value)}/>
                                 </Col>
                              </Row>

                              
                              <Row>
                                 <Col>
                                    <StyledInputGroup type="password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} placeholder="Senha" />
                                 </Col>

                                 <Col>
                                    <StyledInputGroup type="password" value={confirmPassword} onBlur={(e) => validatePasswords(e.target.value)} onChange={(e) => setConfirmPassword(e.target.value)}placeholder="Repita a senha" />
                                 </Col>
                                 {errorConfirmPassword && <Error>{errorConfirmPassword}</Error>}
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

