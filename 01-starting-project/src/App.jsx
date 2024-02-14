import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 150,
    expectedReturn: 100,
    duration: 5,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(identifier, newValue) {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [identifier]: +newValue,
      };
    });

  }

  return (
    <main>
      <Header />
      <UserInput key={JSON.stringify(userInput)} onChangeInput={handleInputChange} inputValue={userInput} />
      {inputIsValid ? <ResultTable input={userInput} /> : <p className="center">Please enter a valid duration</p>}
    </main>
  );
}

export default App;
