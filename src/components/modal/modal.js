import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form } from 'react-bootstrap'
import { ContainerModal, Title, StyledButton, StyledInput, StyledInputSelect, IconClose, StyledInputCategory, IconButtonCategory, StyledInputTextarea, InputCategoryButton } from './style';
import Api from '../../services/api';




export default function ModalExpenses(props) {
    const [category, setCategory] = useState("");
    const [currency] = useState("BRL");
    const [dateCategory, setDateCategory] = useState([]);
    const [buttonCategory, setButtonCategory] = useState(false);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    

    useEffect( () => {
       console.log(props.editId)
     }, []);

    

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
    
    function updateDate(valor) {
        let newValue = valor
        .replace(/\D/, "")
        .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
        .replace(/(\/\d{4})\d+?$/, "$1");
      setDate(newValue);
    
    }
  


    async function newRegister() {
        await Api.get(`/billing`).then(async (data) => {
            let register = {type: type, description: description, amount: amount, user: user, date: date, id: (data.data.length + 1)};
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
                <StyledInputCategory  list="category" placeholder="Nova Categoria" value={props.data.category} onChange={searchCategory}/>
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
                            <option value={props.data.type}>Tipo</option>
                            <option value="credito">Crédito</option>
                            <option value="debito">Débito</option>
                             </StyledInputSelect>  
                </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <StyledInput type="text" placeholder="Nome" value={props.data.user} onChange={updateUser} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <StyledInput type="text" value={date} placeholder="data" onChange={(e) => updateDate(e.target.value)} />
                    </Col>
                    <Col xs={6}>
                        <StyledInput type="currency" placeholder="Valor" onFocus={onFocus} onBlur={onBlur} value={props.data.amount} onChange={updateAmount}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <StyledInputTextarea as="textarea" aria-label="With textarea" placeholder="Descrição" value={props.data.description} onChange={updateDescription}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3}>
                        <StyledButton variant="primary" size="sm" onClick={() => {newRegister(); props.onHide()}}>Cadastrar</StyledButton>{' '}
                    </Col>
                </Row>
                
            </Form>
            </Modal.Body>

        </ContainerModal>
    )
}