import styled from "styled-components";
import cards from "./Cards";
import Pergunta from "./Pergunta";
import { useState } from "react";

export default function Perguntas(){
    const [aberto, setAberto]= useState(null);
    return (
        <Wrapper>
            {cards.map((c,i)=>(
                <Pergunta 
                    key={i} 
                    numero={i}
                    cardAberto={()=>setAberto(i)}
                    estaAberto={i===aberto}
                    question={c.question}
                    answer={c.answer}
                />
            ))}
            
        </Wrapper>
    )
}

const Wrapper=styled.div`
    
`