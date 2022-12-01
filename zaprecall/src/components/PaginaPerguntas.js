import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Perguntas from "./Perguntas";

export default function PaginaPerguntas(){
    const [feitos, setFeitos]= useState(0)
    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <Margem>
            <Perguntas/>
            </Margem>
            <Footer feitos={feitos}/>
        </Wrapper>
        
    )
}
//background: ;purple
const Wrapper=styled.div`
    box-sizing: border-box;
    background: #FB6B6B;
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Margem=styled.div`
    margin-top: 90px;
    margin-bottom:80px;
`