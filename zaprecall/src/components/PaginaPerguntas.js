import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import Header from "./Header";

export default function PaginaPerguntas(){
    return (
        <Wrapper>
            <Header/>
            <GlobalStyle/>
            <h1>PaginaPerguntas</h1>
        </Wrapper>
        
    )
}

const Wrapper=styled.div`
    box-sizing: border-box;
    background: #FB6B6B;
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
`