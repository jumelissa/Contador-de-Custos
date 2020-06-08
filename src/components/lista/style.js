import styled from 'styled-components';


export const ContainerList = styled.div`
    margin-top: 15px;
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

