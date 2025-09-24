import React, { useState } from "react";
import "./App.css";
import Title from "./Title";
import CurrencyDropdown from "./components/CurrencyDropdown";

function App() {
  const [currency1, setCurrency1] = useState<string>("");
  const [currency2, setCurrency2] = useState<string>("");
  const [inputValue, setValue] = useState<string>("");

  const handleAmountInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  let handleConvert = () => {
    console.log(
      "Converting: " + currency1 + " to " + currency2 + " | Amt: " + inputValue
    );
  };

  return (
    <>
      <div className="app-container">
        <Title />
        <div className="dropdowns-container">
          <CurrencyDropdown onCurrencyChange={setCurrency1} />
          <h4>to</h4>
          <CurrencyDropdown onCurrencyChange={setCurrency2} />
        </div>
        <input
          type="number"
          value={inputValue}
          onChange={handleAmountInput}
          placeholder="Amount"
        />
        <button className="convert-button" onClick={handleConvert}>
          Convert
        </button>
      </div>
    </>
  );
}

export default App;
