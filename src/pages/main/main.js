import React, { useState, useEffect } from 'react';
import image from '../../assets/image/Grupo 10473.png';
import photouser from '../../assets/image/photouser.jpeg';
import person from '../../assets/image/ic_people_24px@2x.png';
import * as S from "./style";
import { Col, Row, FormControl, FormGroup, Form } from 'react-bootstrap';
import ModalExpenses from "../../components/modal/modal";
import { useHistory } from 'react-router-dom';
import Api from '../../services/api';
import Lista from '../../components/lista/lista';
import body from '../../style';
import moment from 'moment';









export default function Main() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [spending, setSpending] = useState("");
    const [appetizer, setAppetizer] = useState(0);
    const [recebidos, setRecebidos] = useState("");
    const [balance, setBalance] = useState("");
    const [modalData, setModalData] = useState({});
    const [balanceIcon, setBalanceIcon] = useState(0);
    const [day, setDay] = useState(moment().format('YYYY-MM-DD'));
    const [itemsFilter, setItemsFilter] = useState([]);
    const [items, setItems] = useState([]);
    

    const handleClose = () => setShow(false);
   
    function handleShow() {
        setModalData("");
        setShow(true);
    }
   


    useEffect( () => {
        if(sessionStorage.getItem("users_id") === null) {
            return history.push("/");
        } 

        Api.get(`/billing`).then((e) => {
            let credito = 0;
            let debito = 0;
            e.data.forEach(e => {
                e.type === "credito" ? credito += parseFloat(e.amount): debito += parseFloat(e.amount);
            });
           
            setBalance(maskPrice(credito - debito));
            setSpending(maskPrice(debito));
            setRecebidos(maskPrice(credito));
            setAppetizer(e.data.length);
            setBalanceIcon(credito - debito);
        })

        Api.get(`/billing`).then((data) => {
            setItems(data.data);
            setItemsFilter(data.data);
        });

     }, []);

     async function edition(id) {
        let edit = await Api.get(`/billing?id=${id}`);
        edit = edit.data[0]
        await setModalData(edit);
        
     }


function handleDate(e) {
   setDay(e.target.value);
  let r = [];
  const dayArray = e.target.value.split("-");
  items.map((i) => {
    if (i.date === `${dayArray[2]}/${dayArray[1]}/${dayArray[0]}`) {
        r.push(i);
    }
  })
    setItemsFilter(r);
}


    
function signOut() {
        sessionStorage.clear()
        return history.push("/");
}

function maskPrice(valor) {
    let newValue = `${valor.toFixed(2)}`
        .replace(/\D/g, "")
        .replace(/(\d)(\d{2})$/, "$1,$2")
        .replace(/(?=(\d{3})+(\D))\B/g, ".")
        return `${newValue}`;

}


    return(
    <body >
        <S.Containermain>
                <header>
                    <img src={ image } />
                    <S.welcomeUser>Olá, {sessionStorage.getItem(`user_name`) || "visitante"}</S.welcomeUser>
                    <S.PhotoUser src={ photouser } />
                    <S.IconLogout onClick={signOut}/>
                </header>
                <S.Line />
                <S.Dashboard>
                    <p>Dashboard</p>
                </S.Dashboard>

               <section>
                   <aside></aside>

                   <main>
                        
                            <Row>
                                <Col xs={2}>
                            <input type="date" value={day} onChange={handleDate} />
                                </Col>
                            </Row>
                    
                       
                       <Row>
                           <Col xs={3}>
                                <S.Values border="1px solid #0DC380">
                                    <h5>Recebidos</h5>
                                    <div>
                                    <S.Currency color="#0DC380">R$</S.Currency>
                                    <S.IconArrowUp color="#0DC380"/>
                                    </div>
                                    <S.Value color="#0DC380">{recebidos}</S.Value>
                                </S.Values>
                                
                           </Col>
                           <Col xs={3}>
                           <S.Values border="1px solid #DC0F0F">
                                    <h5>Custos</h5>
                                    <div>
                                    <S.Currency color="#DC0F0F">R$</S.Currency>
                                    <S.IconArrowDown color="#DC0F0F"/>
                                    </div>
                                <S.Value color="#DC0F0F">{spending}</S.Value>
                                </S.Values>
                                
                           </Col>
                           <Col xs={3}>
                           <S.Values border="1px solid #2612AF">
                                    <h5>Saldo</h5>
                                    
                                        {balanceIcon >= 0 && (
                                            <>
                                             <div>
                                                  <S.Currency color="#0DC380">R$</S.Currency>
                                                 <S.IconArrowUp color="#0DC380"/>
                                             </div>
                                             <S.Value color="#2612AF">{balance}</S.Value>
                                             </>
                                        )}
                                        
                                        {balanceIcon < 0 && (
                                            <>
                                             <div>
                                                  <S.Currency color="#DC0F0F">R$</S.Currency>
                                                  <S.IconArrowDown color="#DC0F0F"/>
                                             </div>
                                             <S.Value color="#DC0F0F">-{balance}</S.Value>
                                             </>
                                        )}
                                   
                                    
                                    
                                </S.Values>
                                
                           </Col>
                           <Col xs={3}>
                           <S.Values border="1px solid #F59324">
                                    <h5>Entrada/mês</h5>
                                    <img src={ person } />
                            <S.Value color="#F59324">{appetizer}</S.Value>
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
                               { itemsFilter.length > 0 &&
                            <Lista handleShow={handleShow} edition={edition} items={itemsFilter}/>
                                }

                            { itemsFilter.length === 0 &&
                                <S.noRegistry>Não existe registros para este dia</S.noRegistry>
                                }
                           </Col>
                       </Row>
                   </main>
               </section>
              
              <ModalExpenses show={show} onHide={handleClose} data={modalData} />
              
        </S.Containermain>
        </body>
        
    )
}

