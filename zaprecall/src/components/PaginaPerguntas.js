import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PaginaPerguntas(){
    const [feitos, setFeitos]= useState(0)
    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <h1>PaginaPerguntas</h1>
            <Footer feitos={feitos}/>
        </Wrapper>
        
    )
}
//background: #FB6B6B;
const Wrapper=styled.div`
    box-sizing: border-box;
    background: purple;
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
`