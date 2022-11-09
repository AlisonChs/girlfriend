import { useState } from 'react';
import '../App.css';

export function Password ({setStep}) {

    const [inputPassword, setInputPassword] = useState();

    const handlePassword = (value) => {
        setInputPassword(value.target.value)
    }

    const handleNext = () => {
        inputPassword === 'a' ? setStep(1) : alert('Errou a senha, amor')
    }

    return (
        <div className="group">

                <input
                    type="text"
                    minLength="4"
                    maxLength="8"
                    size="10"
                    className="input"
                    name="style1"
                    required
                    onChange={handlePassword}
                />

                <label htmlFor="style1" className="label">
                    Senha
                </label>

                <button className='sendPasswordButton' onClick={handleNext}>{'>'}</button>
            
            </div>
    )
}