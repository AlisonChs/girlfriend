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
      
      {step === 1 && (
        <Wifi />
      )}

      {step === 2 && (
        <One />
      )}

      {step === 3 && (
        <Two />
      )}

      {step === 4 && (
        <Three />
      )}

      {step === 5 && (
        <>
         <Four />
         <button className='backButton' onClick={() => setStep(0)} > Voltar ao início </button>
        </>
      )}

    </div>
  );
}

export default App;
