import { useState } from "react";

import InputGroup from "./InputGroup";
import ResultTable from "./ResultTable";

import {calculateInvestmentResults} from './util/investment'

function App() {

  let [initialInvestment,FuncIntInv] = useState(10000);
  let [annualInvestment,FuncAnualInv] = useState(1200);
  let [expectedReturn,FuncExpReturn] = useState(6);
  let [duration,FuncDuration] = useState(10);

  function SetIntInv(){
    FuncIntInv(+event.target.value);
  }

  function SetAnualInv(){
    FuncAnualInv(+event.target.value);
  }

  function SetExpReturn(){
    FuncExpReturn(+event.target.value);
  }

  function SetDuration(){
    FuncDuration(+event.target.value);
  }

  let annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  let userValid = duration>=1;
  console.log(annualData);
  return (
    <div>
      <div id="header">
        <img src="./investment-calculator-logo.png" />
        <h1>React Investment Calculator</h1>
      </div>
      <section id="user-input">
        <div className="input-group">
          <InputGroup onChangeVal={SetIntInv} values={initialInvestment} label="Initial Investment" />
          <InputGroup onChangeVal={SetAnualInv} values={annualInvestment} label="Anual Investment" />
        </div>
        <div className="input-group">
          <InputGroup onChangeVal={SetExpReturn} values={expectedReturn} label="Expected Return" />
          <InputGroup onChangeVal={SetDuration} values={duration} label="Duration" />
        </div>
      </section>
      <div>
        {!userValid && <p className="center">Please Enter a Valid Duration!</p>}
        {userValid && <ResultTable TableData={annualData}/>}
      </div>
    </div>
  );
}

export default App;
