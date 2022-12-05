
import { useState } from 'react';
import styled from 'styled-components';
import seta from '../assets/seta_play.png';
import virar from '../assets/seta_virar.png';
import erro from '../assets/icone_erro.png';
import acerto from '../assets/icone_certo.png';
import quase from '../assets/icone_quase.png';


export default function PerguntaIndividual(props) {

    let x=0;

    const [estadoDaCarta, setestadoDaCarta] = useState(0);
    const [cor, setcor]= useState("black");
    const [linha, setlinha]= useState("none");
    const [contador, setcontador]= useState(0);
    const [icone, seticone]= useState(seta);
    //const [concluidos,setconcluidos]= useState(0);

    function mudarCor(color){
        setcontador(contador+1);
        //props.setconcluidos(contador);
        x=x+1;

        if(color==="green"){
            //#2FBE34
            setcor("green");
            setlinha("line-through");
            seticone(acerto);
        }else{
            if(color==="red"){
                //#FF3030
                setcor("red");
                setlinha("line-through");
                seticone(erro);
            }else {
                if(color==="orange"){
                    //#FF922E
                    setcor("orange");
                    setlinha("line-through");
                    seticone(quase);
                }
            }
        }
    }
    

    if (estadoDaCarta === 0) {
        //fechado
        return <Carta ><Pergunta style={{color: `${cor}`,textDecoration:`${linha}`}} data-test="flashcard-text" >Pergunta {props.index + 1}</Pergunta><img src={icone} alt="icone" onClick={() => setestadoDaCarta(1)} data-test="play-btn" /></Carta>

    } else {
        if (estadoDaCarta === 1) {
            //pergunta
            return <CartaAberta data-test="flashcard-text"> {props.item.Q}<img src={virar} alt="virar" onClick={() => setestadoDaCarta(2)} data-test="turn-btn" /></CartaAberta>

        } else {
            if (estadoDaCarta === 2) {
                //gabarito
                return (
                    <CartaTres data-test="flashcard-text" >{props.item.R}
                        <Lado>
                            <Vermelho onClick={()=>mudarCor("red") /setestadoDaCarta(0)/props.setconcluidos(1)} data-test="no-btn" >
                                Não Lembrei
                            </Vermelho>
                            <Orange onClick={()=>mudarCor("orange") /setestadoDaCarta(0)/props.setconcluidos(1)} data-test="partial-btn" >
                                Quase não lembrei
                            </Orange>
                            <Verde onClick={()=>mudarCor("green") /setestadoDaCarta(0)/props.setconcluidos(1)} data-test="zap-btn" >
                                Zap!
                            </Verde>
                        </Lado>
                    </CartaTres>
                )
            }
        }
    }
}

const Pergunta = styled.div`
    
`//color:${(props)=>props.cor}

const Carta = styled.div`
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
`
const CartaAberta=styled.div`
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
const CartaTres = styled.div`
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

const Lado = styled.div`
    margin-top:15px;
    display: flex;
`

const Verde = styled.div`
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

const Orange = styled.div`
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
    margin-left: 8px;
    margin-right: 8px;
`

const Vermelho = styled.div`
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
