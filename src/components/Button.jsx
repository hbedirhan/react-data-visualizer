import React from 'react'

function Button({ startGeneratingData, stopGeneratingData}) {

  return (
    <>
      <button className='btn start' onClick={startGeneratingData}>Start</button>
      <button className='btn stop' onClick={stopGeneratingData}>Stop</button>
    </>
  )
}

export default Button