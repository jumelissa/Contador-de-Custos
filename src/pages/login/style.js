import styled from 'styled-components';
import avatar from '../../assets/image/avatar.png';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    

        aside {
        width: 50%;
        height: 100vh;
        background-image: url(${avatar});
        background-size: cover;
        background-position: center;
    }

        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 100vh;
            
            
        }

        section img {
            margin-top: 100px;
        }
        
        section h2 {
            color: #3A478D;
            margin-top: 2%;
        }

        section p {
            color: #979797;
        }

        section Form {
            width: 47%;
            height: 400px;
            margin: 10px;
            
            
        }

        section span {
            color: #979797;
            position: absolute;
            right: 0;
            margin-right: 10px;
            cursor: pointer;
        }
`;

export const StyledInput = styled(Form.Control)`
        width: 100%;
        height: 7vh;
        margin: 10px;
    
`;

export const StyledButton = styled(Button)`
        width: 100%;
        height: 7vh;
        background-color: #2C3668;
        margin: 10px;
        color: white;
        background: #3A478D;

`;

export const StyledChek = styled(Form.Check)`
        padding-bottom: 15px;
        color: #979797;
        
        input[type=radio] {
            display: none;
        }

        input[type="radio"] + label:before {
            content: "";
            display: inline-block;
            width: 25px;
            height: 25px;
            padding: 6px;
            margin-right: 10px;
            background-clip: content-box;
            border: 2px solid #2C3668;
            background-color: #e7e6e7;
            border-radius: 50%;
           
}
        input[type="radio"]:checked + label:before {
            background-color: #2C3668;
        }
`;

export const Cadastro = styled.div`
            width: 100%;
            height: 500px;
            margin: 10px;
            text-align: center;
            

            Form {
                /* width: 47% !important; */
                margin: 0 auto !important;
                
                
            }
`;


export const StyledInputCadastro = styled(Form.Control)`
        width: 100%;
        height: 7vh;
        margin-bottom: 20px;

        .col-6 {
            padding: 0;
        }
        
`;

export const StyledInputGroup = styled(Form.Control)`
       margin-bottom: 20px;
       /* width: 150px; */
       height: 7vh;
       
       
`;

export const StyledButtonCadastrar = styled(Button)`
        width: 93%;
        height: 7vh;
        background-color: #3A478D;
        display: block;
        color: white;
        
        margin-left: 15px;
       

`;

export const Error = styled.div`
    color: #DC0F0F;
    margin-left: 10px;
`;












