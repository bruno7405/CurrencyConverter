import React, { useState } from "react";
import api from "./api.js";
import "./App.css";
import Title from "./components/Title";
import CurrencyDropdown from "./components/CurrencyDropdown";

function App() {
  const [currency1, setCurrency1] = useState<string>("");
  const [currency2, setCurrency2] = useState<string>("");
  const [inputValue, setValue] = useState<string>("");
  const [amt, setAmt] = useState<string>("");

  const handleAmountInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  let handleConvert = async () => {
    try {
      const response = await api.get("/convert", {
        params: { f: currency1, t: currency2, amt: inputValue },
      });
      setAmt(response.data.toFixed(2) + " " + currency2);
    } catch (error) {
      console.error("Error converting", error);
    }
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
        <h4>{amt}</h4>
      </div>
    </>
  );
}

export default App;
