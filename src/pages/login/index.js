import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {Container, StyledInput, StyledButton, StyledChek, Cadastro, StyledInputCadastro, StyledInputGroup, StyledButtonCadastrar, Error } from "./style";
import logo from '../../assets/image/Caminho 1.jpg';
import { Form, Col, Row } from 'react-bootstrap';

import Api from '../../services/api';



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

   async function toggleLogin() {
      let dados_user = {name: name, email: email, cpf: cpf, rg: rg, password: createPassword, id: 2};
      let response = await Api.post(`/users`,dados_user);
      console.log(response);

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
         sum = sum%11;

         if(sum === 10 || sum === 11) {
            sum = 0;
         }

         if(sum === parseInt(cpfValid[cpfValid.length-1])) {
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



      useEffect(() => {

      }, []);




      async function buttonLogin(e) {
         e.preventDefault();
         try {
            const response = await Api.get(`/users?email=${email}`);
            console.log(response);
         } catch(error){
         
         }
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
               <Form onSubmit={buttonLogin}>
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
                       <StyledButton type="submit"  disabled={!email || !password || errorEmail || errorPassword ? true : false} variant="" size="lg" active>Entrar</StyledButton>{' '}
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
                              <StyledInputCadastro type="text" min-length="3" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
                              
                           </Row>

                           <Row>
                            <StyledInputCadastro type="email" value={email} onBlur={(e) => validateEmail(e.target.value)} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                            {errorEmail && <Error>{errorEmail}</Error>}
                           </Row>
                           </Col>

                              <Row>
                                 <Col xs={6}>
                                    <StyledInputGroup placeholder="000.000.000-00" name="cpf" value={cpf} required onChange={(e) => validateCpf(e.target.value)}/>
                                    {!checkCpf && <Error>{errorCpf}</Error>}
                                 </Col>
                                

                                 <Col xs={6}>
                                    <StyledInputGroup placeholder="RG" maxLength="9" name="rg" value={rg} required onChange={(e) => validateRg(e.target.value)}/>
                                 </Col>
                              </Row>

                              
                              <Row>
                                 <Col xs={6}>
                                    <StyledInputGroup type="password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} placeholder="Senha" />
                                 </Col>

                                 <Col xs={6}>
                                    <StyledInputGroup type="password" value={confirmPassword} onBlur={(e) => validatePasswords(e.target.value)} onChange={(e) => setConfirmPassword(e.target.value)}placeholder="Repita a senha" />
                                 </Col>
                                 {errorConfirmPassword && <Error>{errorConfirmPassword}</Error>}
                              </Row>


                              <Row>
                                 <StyledButtonCadastrar type="submit" variant="" size="lg" active onClick={toggleLogin}>Cadastrar</StyledButtonCadastrar>{''}
                              </Row>
                              
                              
                           </Form>
      
                        </Cadastro>
               
            )

            }
            </section>

            
       </Container>
    )
}

