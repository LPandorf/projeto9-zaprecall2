import styled from "styled-components";
import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";

export default function Pergunta({numero, cardAberto, estaAberto, question, answer,}){
    return (
        <>
            {!estaAberto ?(
                <Fechada cor={"#333333"}>
                <p>Pergunta {numero+1}</p>
                <img src={play} alt="play" onClick={cardAberto}/>

                </Fechada>
            ):(
                <Aberta>
                {question}
                <img src={virar} alt="virar"/>
                </Aberta>
            )}
            
            
        </>
    )
}
/*

            <Resposta>
                <p>respostinha</p>
                <Botoes>
                    <Vermelho>Não Lembrei</Vermelho>
                    <Amarelo>Quase não lembrei</Amarelo>
                    <Verde>Zap!</Verde>
                </Botoes>
            </Resposta>
*/
const Aberta=styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height:100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    img{
        width: 30px;
        height: 20px;
        margin-left: 240px;
    }
`

const Fechada=styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 12px;
    padding: 15px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props=>props.cor};
    img{
        width: 23px;
        height: 23px;
        bottom: 10px;
        right: 10px;
    }
`
//#333333

const Resposta=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    width: 300px;
    margin: 12px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`
const Botoes=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:20px;
`

const Vermelho=styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Amarelo=styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Verde=styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`