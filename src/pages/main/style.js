import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

export const Containermain = styled.div`
    width: 100%;
    height: 100%;

        img {
            width: 130px;
            height: 45px;
            margin: 10px;
        }

        section {
            display: flex;

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

    button {
        border: none;
        color: #2C3668;
        cursor: pointer;
    }
`;

export const Received = styled.div`
    width: 220px;
    height: 100px;
    position: relative;
    border: 1px solid #0DC380;
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

    p {
        font-size: 30px;
        color: #0DC380;
        font-weight: bold;
    }
`;

export const Costs = styled.div`
    width: 220px;
    height: 100px;
    position: relative;
    border: 1px solid #DC0F0F;
    padding: 10px;
    border-radius: 10px;
    color: #979797;

    img {
        width: 17px;
        height: 15px;
        position: absolute;
        right: 0;
        top: 0;
    }

    p {
        font-size: 30px;
        color: #DC0F0F;
        font-weight: bold;
    }
`;

export const Balance = styled.div`
    width: 220px;
    height: 100px;
    position: relative;
    border: 1px solid #2612AF;
    padding: 10px;
    border-radius: 10px;
    color: #979797;

    img {
        width: 17px;
        height: 15px;
        position: absolute;
        right: 0;
        top: 0;
    }

    p {
        font-size: 30px;
        color: #2612AF;
        font-weight: bold;
    }
`;

export const Month = styled.div`
    width: 220px;
    height: 100px;
    position: relative;
    border: 1px solid #F59324;
    padding: 10px;
    border-radius: 10px;
    color: #979797;

    img {
        width: 20px;
        height: 15px;
        position: absolute;
        right: 0;
        top: 0;
    }

    p {
        font-size: 30px;
        color:  #F59324;
        font-weight: bold;
    }
`;



export const IconOpenModal = styled(AiFillPlusCircle)`
        cursor: pointer;
        color: #3A478D;
        font-size: 30px;
        margin-top: 3vh;
`;

export const FormModal = styled(Form)`
             width: 55vw;
            height: 60vh;
            border-radius: 15px;
            position: relative;

            h5 {
                text-align: center;
            }

    div {
        cursor: pointer;
        
        
    }
`;


