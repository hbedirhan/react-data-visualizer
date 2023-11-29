import React from 'react'

function Input({ setInterval, interval, numberRange, setNumberRange }) {

  const handleChangeInterval = (e) => {
    setInterval(e.target.value);
  };

  const handleChangeRange = (e) => {
    setNumberRange(e.target.value);
  };


  return (
    <div className='input-group'>
      <div className='inputs'>
      <input
        className={interval >= 1 ? 'input' : 'alert-input'}
        id='interval'
        type="number"
        onChange={handleChangeInterval}
        placeholder='generation time interval (default: 1000ms)'
        min={1} />
        {interval >= 1 ? '' : <label className='alert' htmlFor="interval">The generation time should be at least 1 for this.</label>}
      </div>
      <div className='inputs'>
      <input
        className={numberRange >= 1 ? 'input' : 'alert-input'}
        type="number"
        onChange={handleChangeRange}
        placeholder='maximum range (default: 10)'
        min={1} />
        {numberRange >= 1 ? '' : <label className='alert' htmlFor="interval">The range should be at least 1 for this.</label>}
      </div>
    </div>
  )
}

export default Input;