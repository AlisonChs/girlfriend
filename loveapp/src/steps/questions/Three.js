// This is the question three

import { useState } from 'react';

export function Three ({setStep}) {

    const [thirdQuestionValue, setThirdQuestionValue] = useState();

    const handleThirdQuestionValue = (value) => {
        setThirdQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(5);
        alert('Perfeito! Desça para a portaria')
    }

    const handleNext = () => {
        thirdQuestionValue === 'answer' || thirdQuestionValue === 'answer' || thirdQuestionValue === 'answer' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <>
            <b><span>3 - </span> Question </b>
            <div className="group">

                <input
                    type="text"
                    minLength="4"
                    maxLength="30"
                    size="10"
                    className="input"
                    name="style1"
                    required
                    onChange={handleThirdQuestionValue}
                />

                <button className='button next' onClick={handleNext}>{'>'}</button>

            </div>
        </>
    )
}