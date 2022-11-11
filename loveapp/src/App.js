import './App.css';

import { useState } from 'react';

import { Password } from './steps/Password';
import { Wifi } from './steps/Wifi';

import { One } from './steps/questions/One';
import { Two } from './steps/questions/Two';
import { Three } from './steps/questions/Three';
import { Four } from './steps/questions/Four';
import { Five } from './steps/questions/Five';
import { Roules } from './steps/Roules';

function App() {

  const [step, setStep] = useState(0);

  return (
    
    <div className="App">
      
      {step === 0 && (
        <Password setStep={setStep}/>
      )}
      
      { //This question is totally opcional
      
        step === 1 && (
          <Wifi setStep={setStep}/>
        )
      }

      {step === 2 && (
        <Roules setStep={setStep}/>
      )}

      {step === 3 && (
        <One setStep={setStep}/>
      )}

      {step === 4 && (
        <Two setStep={setStep}/>
      )}

      {step === 5 && (
        <Three setStep={setStep}/>
      )}

      {step === 6 && (
        <>
         <Four setStep={setStep}/>
        </>
      )}

      {step === 7 && (
        <>
         <Five setStep={setStep}/>
        </>
      )}

      {step === 8 && (
        <div className='final'>
          <p>Parabéns! Você achou o tesouro</p>
          <button className='button' onClick={() => setStep(0)} > Voltar ao início </button>
        </div>
      )}

    </div>
  );
}

export default App;
