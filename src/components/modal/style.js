import styled from 'styled-components';
import { Modal, Form, Button } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';



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
    margin-bottom: 2vh;
`;

export const StyledButton = styled(Button)`
    margin-top: 2vh;
    background-color: #3A478D;
    border-radius: 5px;
    width: 6vw;
    height: 4vh;
`;
