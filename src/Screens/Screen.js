import React,{useState} from "react";
import InputComponent from "../Components/InputCompontent";

function Screen(){
    const [name,setName]=useState('');
    const [password, setPassword]=useState('');
    return(
<div>
<InputComponent Placeholder={"Name"} onChange={(name)=>setName(name)}  value={name}/>

<InputComponent Placeholder={"Password"} onChange={(password)=>setPassword(password)} value={password}/>
    
    <button onClick={()=>alert(name+password)}>click me</button>
    <hr></hr><br/><br/><br/>
</div>
    )
}
export default Screen;