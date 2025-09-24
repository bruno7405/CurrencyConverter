import React, { useState } from "react";
import Select, { type SingleValue } from "react-select";

type CurrencyOption = {
  value: string;
  label: string;
};

const options: CurrencyOption[] = [
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

interface Props {
  onCurrencyChange: (currency: string) => void;
}

function CurrencyDropdown({ onCurrencyChange }: Props) {
  const [selected, setSelected] = useState<CurrencyOption | null>(null);

  const handleChange = (option: SingleValue<CurrencyOption>) => {
    setSelected(option);
    onCurrencyChange(option?.value ?? "");
  };

  return (
    <div style={{ width: "250px" }}>
      <Select
        options={options}
        value={selected}
        onChange={handleChange}
        placeholder="Select a currency"
        isSearchable={true}
      />
    </div>
  );
}

export default CurrencyDropdown;
