// This is the question five

import { useState } from 'react';

export function Five ({setStep}) {

    const [fifthQuestionValue, setFifthQuestionValue] = useState();

    const handleFifthQuestionValue = (value) => {
        setFifthQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(7);
        alert('Entre dentro do quartinho e resgate seu presente')
    }

    const handleNext = () => {
        fifthQuestionValue === 'answer' || fifthQuestionValue === 'answer' || fifthQuestionValue === 'answer' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <>
            <b><span>5 - </span> Question </b>
            <div className="group">

                <input
                    type="text"
                    minLength="4"
                    maxLength="30"
                    size="10"
                    className="input"
                    name="style1"
                    required
                    onChange={handleFifthQuestionValue}
                />

                <button className='button next' onClick={handleNext}>{'>'}</button>

            </div>
        </>
    )
}