import React from 'react'

function Button({ startGeneratingData, stopGeneratingData}) {

  

  return (
    <>
      <button onClick={startGeneratingData}>Start</button>
      <button onClick={stopGeneratingData}>Stop</button>
    </>
  )
}

export default Button