// This is the question two

import { useState } from 'react';

export function Two ({setStep}) {

    const [secondQuestionValue, setSecondQuestionValue] = useState();

    const handleSecondQuestionValue = (value) => {
        setSecondQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(5);
        alert('Boaa, agora, pegue o elevador')
    }

    const handleNext = () => {
        secondQuestionValue === '111101110010' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <div className='two'>
            <b><span>2 - </span> Question </b>
            <div className="group">

                <input
                    type="text"
                    minLength="4"
                    maxLength="30"
                    size="10"
                    className="input"
                    name="style1"
                    required
                    onChange={handleSecondQuestionValue}
                />

                <button className='button next' onClick={handleNext}>{'>'}</button>

            </div>
        </div>
    )
}