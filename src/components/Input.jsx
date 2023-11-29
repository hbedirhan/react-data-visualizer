import React from 'react'

function Input({ setInterval, interval, numberRange, setNumberRange }) {

  const handleChangeInterval = (e) => {
    setInterval(e.target.value);
  };

  const handleChangeRange = (e) => {
    setNumberRange(e.target.value);
  };


  return (
    <>
      <input
        className={interval >= 1 ? 'input' : 'alert-input'}
        type="number"
        onChange={handleChangeInterval}
        placeholder='generation time interval (default: 1000ms)'
        min={1} />
      <input
        className={numberRange >= 1 ? 'input' : 'alert-input'}
        type="number"
        onChange={handleChangeRange}
        placeholder='maximum range (default: 10)'
        min={1} />
    </>
  )
}

export default Input;