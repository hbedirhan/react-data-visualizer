import React from 'react'

function Input({ setInterval, setNumberRange }) {

  const handleChangeInterval = (e) => {
    setInterval(e.target.value);
  };

  const handleChangeRange = (e) => {
    setNumberRange(e.target.value);
  };


  return (
    <>
      <input className='input' type="number" onChange={handleChangeInterval} placeholder='generation time interval'/>
      <input className='input' type="number" onChange={handleChangeRange} placeholder='number range' />
    </>
  )
}

export default Input;