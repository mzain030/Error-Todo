import React, { useState } from "react";
import InputRevisionScreenOne from "./InputRevisionScreenOne";
import ButtonScreenOne from './ButtonScreenOne';
function RevisionScreenOne(){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    return(
        <div>
       
        <InputRevisionScreenOne placeholder={'Name'}
         onChange={(e)=>setName(e)} 
        value={name}
         /><br/>
        <InputRevisionScreenOne placeholder={'Password'} onChange={(x)=>setPassword(x)} value={password}/><br/>
        <ButtonScreenOne onClick={()=>alert(name+" "+password)}/>
        </div>
    )

}
export default RevisionScreenOne;