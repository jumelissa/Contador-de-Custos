import styled from 'styled-components';
import { Modal, Form, Button } from 'react-bootstrap';
import { AiOutlineClose, AiFillPlusCircle } from 'react-icons/ai';


export const ContainerModal = styled(Modal)`
       
        .modal-content{
            margin: 0 auto !important;
            border-radius: 10px;
            
        }

        .modal-dialog{
            max-width: 800px;
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
    margin-bottom: 20px;
    height: 50px;

`;

export const StyledInputSelect = styled(Form.Control)`
    width: 100%;
    height: 50px;
    border: 1px solid #ced4da;
    margin-bottom: 20px;
    padding: .375rem .75rem;
    border-radius: .25rem;
    color: gray;
    
            
        :focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }

`;


export const StyledInputCategory = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #ced4da;
    margin-bottom: 20px;
    padding: .375rem .75rem;
    border-radius: .25rem;
    
    select {
        -webkit-appearance: none; 
        appearance: none; 
        -moz-appearance: none;
    }
    

    :focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }

`;


export const StyledButton = styled(Button)`
    margin-top: 2vh;
    background-color: #3A478D;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 35px;
    font-size: 17px;
    
`;

export const IconButtonCategory = styled(AiFillPlusCircle)`
    color: #c2c8d1;
    font-size: 30px;
    cursor: pointer;
    position: absolute !important;
    z-index: 100000 !important;
    left: 328px !important;
    top: 10px !important;
    
    
`;

export const StyledInputTextarea = styled(Form.Control)`
    width: 100%;
    height: 180px;
    border: 1px solid #ced4da;
    padding: .375rem .75rem;
    border-radius: .25rem;
    resize: none;
    
        :focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
`;

export const InputCategoryButton = styled.div`
    position: relative;
`;