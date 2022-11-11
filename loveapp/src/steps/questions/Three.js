// This is the question three

import { useState } from 'react';

export function Three ({setStep}) {

    const [thirdQuestionValue, setThirdQuestionValue] = useState();

    const handleThirdQuestionValue = (value) => {
        setThirdQuestionValue(value.target.value)
    }

    const handleCorrectAnswer = () => {
        setStep(6);
        alert('kkkkkkkkkkkkkkk reza a lenda de que ela vai vender isso algum dia')
    }

    const handleNext = () => {
        thirdQuestionValue === '011101000110' ? handleCorrectAnswer() : alert('Errou!')
    }

    return (
        <div className='three'>
            <b><span>3 - </span> Que causam prazer sexual; </b>
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
        </div>
    )
}