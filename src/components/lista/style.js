import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import { Row } from 'react-bootstrap';


export const ContainerList = styled.div`
    margin-top: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 50vh;


`;

export const Title = styled.h6`
    color: #3A478D;
    font-size: 17px;
    font-weight: bold;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #3A478D;
`;

export const Items = styled.p`
    color: #3A478D;
`;


export const ItemValue = styled.p`
    color: ${props => (props.credit ? "#0DC380" : "#DC0F0F")};

`;

export const IconEdit = styled(FiEdit2)`
    margin: 16px;
    color: #3A478D;
    cursor: pointer;
    /* margin-right: 40px; */

`;

export const IconDelete = styled(RiDeleteBin6Line)`
      color: #3A478D;
      cursor: pointer;
      
     
`;

export const RowColor = styled(Row)`
    background-color: ${props => (props.backgroundLine ? "white" : "#E2E6EA")};
    padding-top: 20px;
  
`;


