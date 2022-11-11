// This is the question one

import { useState } from 'react';

export function One ({setStep}) {

    const [firstQuestionValue, setFirstQuestionValue] = useState();

    const handleFirstQuestionValue = (value) => {
        setFirstQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(4);
        alert('Parabéns! Esse presente é muito importante pra mim também, pelo trabalho de artesatanato que improvisei')
    }

    const handleNext = () => {
        firstQuestionValue === '011100000110' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <div className='one'>
            <b><span>1 - </span> Artefatos comuns em praias; </b>
            <div className="group">

                <input
                    type="text"
                    minLength="4"
                    maxLength="30"
                    size="10"
                    className="input"
                    name="style1"
                    required
                    onChange={handleFirstQuestionValue}
                />

                <button className='button next' onClick={handleNext}>{'>'}</button>

            </div>
        </div>
    )
}