import styled from "styled-components";
import GlobalStyle from "../GlobalStyles";
import logo from "../assets/logo.png";

export default function PaginaInicial(props){

    function BotaoIniciar(){
        props.setBotao(true);
    }
    return (
        <Wrapper>
            <GlobalStyle/>
            <Tela>
                <Logo><img src={logo} alt="logo"/></Logo>
                <Titulo>Zap Recall</Titulo>
                <Botao onClick={BotaoIniciar} >Iniciar Recall!</Botao>
            </Tela>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const Tela=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo=styled.div`
    width:136 px;
    margin-bottom: 15px;
`

const Titulo=styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF; 
    margin-bottom: 40px;
`

const Botao=styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px
    text-align: center;
    color: #D70900;
`