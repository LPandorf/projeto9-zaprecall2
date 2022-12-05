import styled from "styled-components";

export default function Footer(props){
    return (
        <Wrapper data-test="footer">
            <Concluidos>{props.feitos}/8 CONCLUÍDOS</Concluidos>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    background-color: white;
    height: 70px;
    bottom:0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Concluidos=styled.div`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`