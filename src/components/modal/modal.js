import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form } from 'react-bootstrap'
import { ContainerModal, Title, StyledButton, StyledInput, StyledInputSelect, IconClose, StyledInputCategory, IconButtonCategory, StyledInputTextarea, InputCategoryButton, InputDate } from './style';
import Api from '../../services/api';
import moment from 'moment';
import { Items } from '../lista/style';




export default function ModalExpenses(props) {
    const [category, setCategory] = useState("");
    const [currency] = useState("BRL");
    const [dateCategory, setDateCategory] = useState([]);
    const [buttonCategory, setButtonCategory] = useState(false);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] =  useState(moment().format('YYYY-MM-DD'));
    const [nameButton, setNameButton] = useState("");
   

    

    useEffect( () => {
        setDescription(props.data.description);
        setAmount(props.data.amount);
        setUser(props.data.user);
        setCategory(props.data.category);
        if(props.data === "") {
            setNameButton("Cadastrar");
        } else {
            setNameButton("Atualizar");
        }
     }, [props.data]);

    

    function selectType(e) {
        setType(e.target.value);
    }


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

    function registerDate(e) {
        setDate(e.target.value);
      
    }
    

    async function editionBilling(id) {
        if(type === "") {
            let edit = {category: category, description: description, amount: amount, date: date, user: user,type: id.type, id: id}
            await Api.put(`/billing/${id.id}`, edit);
        } else {
            let edit = {category: category, description: description, amount: amount, date: date, user: user,type: type, id: id}
            await Api.put(`/billing/${id.id}`, edit);
        }
       

}

    async function newRegister() {
        if(props.data === "") {
            await Api.get(`/billing`).then(async (data) => {
                let categoryApi = await Api.get(`/category`);
                let idCategory = 0;
                categoryApi.data.forEach((e) => {
                    if(e.title === category ) {
                        idCategory = e.id
                    }
                });
                let register = {type: type, description: description, amount: amount, user: user, date: date,category: idCategory, id: (data.data.length + 1)};
                await Api.post(`/billing`, register);
                props.callList();
            });
        } else {
            editionBilling(props.data)
        }
      
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
        await Api.post(`/category`, {title: category.toLowerCase(), id: (response.data.length + 1)});
        setButtonCategory(false);
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

                <InputCategoryButton>
                <StyledInputCategory  list="category" placeholder="Nova Categoria" value={category} onChange={searchCategory}/>
                <datalist id="category">
                    {dateCategory.map((e) => {
                            return <option>{e.title}</option>
                        })}
                    </datalist>
                    {buttonCategory && (
                            <IconButtonCategory onClick={addCategory}/>
                    )}
                    </InputCategoryButton>
                </Col>
                <Col xs={6}>
                            <StyledInputSelect as="select" onChange={selectType}>
                            <option>Tipo</option>
                            <option selected={props.data.type === "credito" ? "selected" : false} value="credito">Crédito</option>
                            <option selected={props.data.type === "debito" ? "selected" : false} value="debito">Débito</option>
                             </StyledInputSelect>  
                </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <StyledInput type="text" placeholder="Nome" value={user} onChange={updateUser} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <InputDate type="date" value={date} onChange={registerDate}/>
                    </Col>
                    <Col xs={6}>
                        <StyledInput type="currency" placeholder="Valor" onFocus={onFocus} onBlur={onBlur} value={amount} onChange={updateAmount}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <StyledInputTextarea as="textarea" aria-label="With textarea" placeholder="Descrição" value={description} onChange={updateDescription}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3}>
                        <input type="hidden"/>
                        <StyledButton variant="primary" size="sm" onClick={() => {newRegister(); props.onHide()}}>
                           {nameButton}
                        </StyledButton>{' '}
                    </Col>
                </Row>
                
            </Form>
            </Modal.Body>

        </ContainerModal>
    )
}