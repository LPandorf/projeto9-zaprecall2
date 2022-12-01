import styled from 'styled-components';
import Header from './Header';
import Pergunta from './Pergunta';
import { useState } from 'react';
import Footer from './Footer';
import GlobalStyle from '../GlobalStyles';

export default function Perguntas(){
    const [concluidos,setconcluidos]= useState(0);
    function recebeContador(){
        setconcluidos(concluidos+1)
    }
    return(
        <>
            <GlobalStyle/>
            <Wrapper>
            
                <Header/>
                <Pergunta setconcluidos={setconcluidos} recebeContador={recebeContador}/> 
                <Footer feitos={concluidos} />
            </Wrapper>
        </>
    )
}
//
const Wrapper=styled.div`
    box-sizing: border-box;
    background: #FB6B6B;
    min-height: 100vh;
    min-width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
/*import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Perguntas from "./Perguntas";

export default function PaginaPerguntas(){
    const [concluidos,setconcluidos]= useState(0);
    function recebeContador(){
        setconcluidos(concluidos+1)
    }
    
    
    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <Margem>
            <Perguntas recebeContador={recebeContador}/>
            </Margem>
            <Footer feitos={concluidos}/>
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
`*/