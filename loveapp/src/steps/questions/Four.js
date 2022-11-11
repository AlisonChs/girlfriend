// This is the question four

import { useState } from 'react';

export function Four ({setStep}) {

    const [fourthQuestionValue, setFourthQuestionValue] = useState();

    const handleFourthQuestionValue = (value) => {
        setFourthQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(7);
        alert('Entre para o estacionamento')
    }

    const handleNext = () => {
        fourthQuestionValue === 'answer' || fourthQuestionValue === 'answer' || fourthQuestionValue === 'answer' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <div className='four'>
            <b><span>4 - </span> Question </b>
            <div className="group">

                <input
                    type="text"
                    minLength="4"
                    maxLength="30"
                    size="10"
                    className="input"
                    name="style1"
                    required
                    onChange={handleFourthQuestionValue}
                />

                <button className='button next' onClick={handleNext}>{'>'}</button>

            </div>
        </div>
    )
}