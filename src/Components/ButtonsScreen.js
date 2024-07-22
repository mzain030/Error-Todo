import React, { useState } from 'react'
import Buttons from './Buttons';

const ButtonsScreen = (props) => {
    const {number, increment,decrement}=props;
    console.log(number);
  return (
    <div>
    <Buttons increment={()=>increment()} decrement={()=>decrement()}/>
    <p>{number}</p>


    </div>
  )
}

export default ButtonsScreen