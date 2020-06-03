import styled from 'styled-components';
import { Modal, Form, Button } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';


export const ContainerModal = styled(Modal)`
       
        .modal-content{
            margin: 0 auto !important;
            /* width: 50vw !important; */
            /* height: 60vh !important; */
            border-radius: 10px;
            
        }

        .modal-dialog{
            max-width: 700px;
            min-height: 600px;
            
        }
`;


export const Title = styled(Modal.Title)`
    color: #3A478D;
    text-align: center;

`;


export const IconClose = styled(AiOutlineClose )`
    cursor: pointer;
    color: #3A478D;
    font-size: 20px;
    margin-top: 1vh;
`;

export const StyledInput = styled(Form.Control)`
    margin-bottom: 10px;
    height: 50px;

`;

export const StyledButton = styled(Button)`
    margin-top: 2vh;
    background-color: #3A478D;
    border-radius: 5px;
    width: 6vw;
    height: 4vh;
    margin-left: 4.5vw;
`;
