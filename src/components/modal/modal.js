import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Dropdown, DropdownButton, InputGroup} from 'react-bootstrap'
import { ContainerModal, Title, StyledButton, StyledInput, StyledInputSelect, IconClose, StyledInputCategory, IconButtonCategory, StyledInputTextarea } from './style';
import { AiFillPlusCircle } from 'react-icons/ai';
import Api from '../../services/api';




export default function ModalExpenses(props) {
    const [category, setCategory] = useState("");
    const [currency] = useState("BRL");
    const [dateCategory, setDateCategory] = useState([]);
    const [buttonCategory, setButtonCategory] = useState(false);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");


    function updateDescription(e) {
        setDescription(e.target.value);
        console.log(e.target.value);
    }
    
    function updateAmount(e) {
        setAmount(e.target.value);
        console.log(e.target.value);
    }
    
    function updateUser(e) {
        setUser(e.target.value);
        console.log(e.target.value);
    }
    
    async function newRegister() {
        await Api.get(`/billing`).then(async (data) => {
            let register = {description: description, amount: amount, user: user, id: (data.data.length + 1)};
            await Api.post(`/billing`, register);
        });
       
       
    }
    


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


    async function searchCategory(e) {
        setCategory(e.target.value);
        if(e.target.value.length > 2) {
           let res = await Api.get(`/category?title_like=${e.target.value}`)
           setDateCategory(res.data);
           if(res.data.length === 0) {
                setButtonCategory(true);
           } else {
               setButtonCategory(false);
           }
        } 
    }

    async function addCategory() {
        let response = await Api.get(`/category`)
        await Api.post(`/category`, {title: category, id: (response.data.length + 1)});
    }




    return(
        <ContainerModal show={props.show}>
             <Modal.Header >
                <Title>Novos Lançamentos</Title>
                <IconClose onClick={props.onHide}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                <Row>
                <Col xs={6}>

                <StyledInputCategory  list="category" placeholder="Nova Categoria" onChange={searchCategory}/>
                <datalist id="category">
                    {dateCategory.map((e) => {
                            return <option>{e.title}</option>
                        })}
                    </datalist>
                    {buttonCategory && (
                            <IconButtonCategory onClick={addCategory}/>
                    )}
                    
                </Col>
                <Col xs={6}>
                            <StyledInputSelect as="select" value="tipo">
                            <option>Tipo</option>
                            <option>Crédito</option>
                            <option>Débito</option>
                             </StyledInputSelect>  
                </Col>
                </Row>
                <Row>
                    <Col xs={7}>
                        <StyledInput type="text" placeholder="Nome" onChange={updateUser}/>
                    </Col>
                    <Col xs={5}>
                        <StyledInput type="currency" placeholder="Valor" onFocus={onFocus} onBlur={onBlur} onChange={updateAmount}/>
                    </Col>
                    <Col xs={12}>
                        <StyledInputTextarea as="textarea" aria-label="With textarea" placeholder="Descrição" onChange={updateDescription}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3}>
                        <StyledButton variant="primary" size="sm" onClick={newRegister}>Cadastrar</StyledButton>{' '}
                    </Col>
                </Row>
                
            </Form>
            </Modal.Body>

        </ContainerModal>
    )
}