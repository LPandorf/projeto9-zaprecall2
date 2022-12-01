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

const Wrapper=styled.div`
    box-sizing: border-box;
    background: #FB6B6B;
    min-height: 100vh;
    min-width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
