import React from 'react'
import { useState } from 'react';

const Buttons = (props) => {
    const {increment,decrement}=props;
    
  return (
    <div className="mt-4" >
    <button onClick={()=>increment()}>+</button>
    <button onClick={()=>decrement()}>-</button><br/><br/>
        </div>
  )
}

export default Buttons