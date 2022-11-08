import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { Password, Wifi } from './steps';
import { One, Two, Three, Four } from './steps/questions';

const [step, setStep] = useState(0);

function App() {

  return (
    <div className="App">
      
      {step == 0 (
        <Password />
      )}
      
      {step == 1 (
        <Wifi />
      )}

      {step == 2 (
        <One />
      )}

      {step == 3 (
        <Two />
      )}

      {step == 4 (
        <Three />
      )}

      {step == 5 (
        <Four />
      )}

      {step < 5 ( <button onclick={setStep(step + 1)}> Próximo </button> )}
      {step < 0 ( <button onclick={setStep(step - 1)}> Voltar </button> )}

    </div>
  );
}

export default App;
