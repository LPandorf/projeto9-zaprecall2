import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header(){
    return(
        <Wrapper>
            <Logo src={logo} alt="logo" />
            <Titulo>Zap Recall</Titulo>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display:flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom:40px;
`
const Logo=styled.img`
    width: 52px;
    height: 60px;
`
const Titulo=styled.div`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
    margin-left: 10px;
`
