import React, { useState } from 'react'

function Channel({ setChannel }) {

    const handleChange = (e) => {
        setChannel(e.target.value);
    };

  return (
    <>
        <input
            type="number"
            className='input'
            placeholder='channel'
            onChange={handleChange}
            min={2}/>
    </>
  )
}

export default Channel