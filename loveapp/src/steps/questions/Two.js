// This is the question two

import { useState } from 'react';

export function Two ({setStep}) {

    const [secondQuestionValue, setSecondQuestionValue] = useState();

    const handleSecondQuestionValue = (value) => {
        setSecondQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(4);
        alert('Boaa, agora, pegue o elevador')
    }

    const handleNext = () => {
        secondQuestionValue === 'answer' || secondQuestionValue === 'answer' || secondQuestionValue === 'answer' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <>
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
        </>
    )
}