import { useEffect } from "react"

export function Roules ({setStep}) {

    const handleNext = () => {
        alert('Vamos lá!')
        setStep(3)
    }

    useEffect(() => {
        setTimeout(handleNext, 20000);
      }, []);

    return (
        <p>
            <b>Isto é um jogo.</b>
            <p>Considere isso um mini-labirinto:</p>
            
            <br />
            
            <p>Cada pergunta é um mini-enigma, te dando alguma dica <br /> para seguir a algum objeto ou local</p>
            <p>Nos objetos ou nos locais, haverá uma senha escondida.</p>

            <p className="red">GUARDE TODAS ESTAS SENHAS E PRINCIPALMENTE ANOTE A SEQUÊNCIA DE CADA UMA.</p>
        </p>
    )
}