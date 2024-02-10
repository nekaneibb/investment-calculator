import {calculateInvestmentResults} from '../util/investment.js'
import { useState } from "react";

const INPUT_NAMES = {
  initialInvestment: 1000,
  annualInvestment: 150,
  expectedReturn: 100,
  duration: 5,
};

export default function UserInput() {
  const [userInput, setValue] = useState(INPUT_NAMES);

  function handleChange(identifier, newValue) {
    setValue((prevValues) => {
    return {
        ...prevValues,
        [identifier]: newValue,
  }})
//   calculateInvestmentResults(value)
console.log("Hwllo", userInput);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={userInput.initialInvestment} required name="initialInvestment"  onChange={(event) => handleChange("initialInvestment", event.target.value)} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={userInput.annualInvestment} required name="annualInvestment" onChange={(event) => handleChange("annualInvestment", event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return </label>
          <input type="number" value={userInput.expectedReturn} required name="expectedReturn" onChange={(event) => handleChange("expectedReturn", event.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={userInput.duration} required name="duration" onChange={(event) => handleChange("duration", event.target.value)} />
        </p>
      </div>
    </section>
  );
}
