import PerguntaIndividual from './PerguntaIndividual';
import cards from "./Cards";

import styled from 'styled-components';

export default function Pergunta({setconcluidos,recebeContador}) {
    return (
        <Wrapper>
            {cards.map((item, index) => {
                return (<><PerguntaIndividual key={index} item={item} index={index} setconcluidos={()=>recebeContador()} data-test="flashcard" /></>)
            })}
        </Wrapper>
    )

}

const Wrapper=styled.div`
    margin-top: 80px;
    background-color: #FB6B6B;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`
