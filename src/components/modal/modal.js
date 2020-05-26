import React from 'react'
import { Modal } from 'react-bootstrap';



export default function Modall(props) {

    return(
        <Modal>
            <button onClick={props.handleClose}>fechar</button>
        </Modal>
    )
}