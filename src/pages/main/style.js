import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { AiFillPlusCircle, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineLogout } from 'react-icons/ai';

export const Containermain = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    overflow: hidden;

        img {
            width: 130px;
            height: 45px;
            margin: 10px;
        }

        section {
            display: flex;
            margin: 0 !important;
            padding: 0 !important;

        }

        aside {
            width: 20%;
            height : 100vh;
            background: #2C3668;
            margin-right: 2%;
            
        }

        main {
            width: 80%;
            height: 100vh;
            padding-right: 30px;
            
        }

        h2 {
            margin-top: 20px;
            margin-bottom: 20px;
            color: #3A478D;
        }

        .form-group {
            padding: 0;
            margin-bottom: 3vh;

        }

        header {
            width: 100%;
            position: relative;
            display: flex;
        }
`;

export const PhotoUser = styled.img`
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    position: absolute;
    right: 20px;
`;

export const welcomeUser = styled.div`
    position: absolute;
    right: 100px;
    margin-top: 20px;
`;

export const Line = styled.div`
    width: 100vw;
    height: 1px;
    background: #2C3668;
`;

export const Dashboard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7vh;
    color: #2C3668;
    padding: 10px;

    p {
        margin-bottom: 0;
    }

`;

export const IconLogout = styled(AiOutlineLogout)`
    cursor: pointer;
    color: #3A478D;
    position: absolute;
    right: 8px;
    margin-top: 40px;
`;

export const Values = styled.div`
    width: 18vw;
    height: 13vh;
    position: relative;
    border: ${props => props.border};
    padding: 10px;
    border-radius: 10px;
    color: #979797;
    


    img {
        position: absolute;
        right: 0;
        top: 0;
        width: 17px;
        height: 15px;
    } 

    div {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;
        margin: 10px;
        font-size: 13px;
        color: ${props => props.color};
    }
    

`;

export const Currency = styled.p`
     color: ${props => props.color};
`;

export const Value = styled.p`
         font-size: 30px;
        color: ${props => props.color};
        font-weight: bold;
`;


export const IconOpenModal = styled(AiFillPlusCircle)`
        cursor: pointer;
        color: #3A478D;
        font-size: 30px;
        margin-top: 4vh;
        margin-left: 40px;
`;

export const IconArrowUp = styled(AiOutlineArrowUp)`
    font-size: 10px;

`;

export const noRegistry = styled.h5`
    text-align: center;
    color: #3A478D;
    padding-top: 100px;
`;

export const IconArrowDown = styled(AiOutlineArrowDown)`
     font-size: 10px;
`;





