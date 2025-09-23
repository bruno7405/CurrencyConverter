import React, { useState } from "react";
import Select from "react-select";

// Currency abbreviations as options
const options = [
  { value: "EUR", label: "EUR" },
  { value: "USD", label: "USD" },
  { value: "JPY", label: "JPY" },
  { value: "BGN", label: "BGN" },
  { value: "CZK", label: "CZK" },
  { value: "DKK", label: "DKK" },
  { value: "GBP", label: "GBP" },
  { value: "HUF", label: "HUF" },
  { value: "PLN", label: "PLN" },
  { value: "RON", label: "RON" },
  { value: "SEK", label: "SEK" },
  { value: "CHF", label: "CHF" },
  { value: "ISK", label: "ISK" },
  { value: "NOK", label: "NOK" },
  { value: "HRK", label: "HRK" },
  { value: "RUB", label: "RUB" },
  { value: "TRY", label: "TRY" },
  { value: "AUD", label: "AUD" },
  { value: "BRL", label: "BRL" },
  { value: "CAD", label: "CAD" },
  { value: "CNY", label: "CNY" },
  { value: "HKD", label: "HKD" },
  { value: "IDR", label: "IDR" },
  { value: "ILS", label: "ILS" },
  { value: "INR", label: "INR" },
  { value: "KRW", label: "KRW" },
  { value: "MXN", label: "MXN" },
  { value: "MYR", label: "MYR" },
  { value: "NZD", label: "NZD" },
  { value: "PHP", label: "PHP" },
  { value: "SGD", label: "SGD" },
  { value: "THB", label: "THB" },
  { value: "ZAR", label: "ZAR" },
];

function CurrencySelect() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ width: "250px" }}>
      <Select
        options={options}
        value={selected}
        onChange={(option) => setSelected(option)}
        placeholder="Select a currency"
        isSearchable={true}
      />
      {selected && <p>Selected: {selected.value}</p>}
    </div>
  );
}

export default CurrencySelect;
