import './App.css';

import { useState } from 'react';

import { Password } from './steps/Password';
import { Wifi } from './steps/Wifi';

import { One } from './steps/questions/One';
import { Two } from './steps/questions/Two';
import { Three } from './steps/questions/Three';
import { Four } from './steps/questions/Four';

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
        <One setStep={setStep}/>
      )}

      {step === 3 && (
        <Two setStep={setStep}/>
      )}

      {step === 4 && (
        <Three setStep={setStep}/>
      )}

      {step === 5 && (
        <>
         <Four setStep={setStep}/>
        </>
      )}

      {step === 6 && (
        <>
          <p>Final</p>
          <button className='button' onClick={() => setStep(0)} > Voltar ao início </button>
        </>
      )}

    </div>
  );
}

export default App;
