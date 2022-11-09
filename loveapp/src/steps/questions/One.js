// This is the question one

import { useState } from 'react';

export function One ({setStep}) {

    const [firstQuestionValue, setFirstQuestionValue] = useState();

    const handleFirstQuestionValue = (value) => {
        setFirstQuestionValue(value.target.value)
    }

    const handleNext = () => {
        firstQuestionValue === 'Parque Villa Lobos' || firstQuestionValue === 'Parque villa lobos' || firstQuestionValue === 'parque villa lobos' ? setStep(3) : alert('Errou!')
    }

    return (
        <>
            <b><span>1 - </span> Qual foi o lugar (físico) em que nos conhecemos?</b>
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
        </>
    )
}