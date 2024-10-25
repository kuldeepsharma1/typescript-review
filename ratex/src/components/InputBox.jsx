import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md flex ${className}`}>
      <div className='w-1/2 pr-2'>
        <label htmlFor={amountInputId} className='text-gray-600 mb-1 block'>{label}</label>
        <input
          id={amountInputId}
          onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
          value={amount}
          disabled={amountDisabled}
          type="number"
          className='outline-none w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          placeholder='Amount'
        />
      </div>
      <div className="w-1/2 pl-2">
        <label className="text-gray-600 mb-1 block">Currency Type</label>
        <select
          value={selectCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          disabled={currencyDisabled}
          className="rounded-lg border border-gray-300 w-full p-2 bg-zinc-100 cursor-pointer focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
