import React from "react";
import { useState } from "react";
import Button from "./Button";
import InputFile from "./InputFile";
import Label from "./Label";
function PracticeScreen() {

    const [name, setName] = useState(''); 
    const [password,setPassword]=useState('')
    // function abc(name) {
    //     setName(name);
    //     // alert(name)
    // }
    return (
        <div>
            <Label title={'Name'} />
            <InputFile
             placeHolder={"Please Enter Your Name"} 
             onChange={(name) => setName(name)} 
             value={name} />
            <Label title={'Password'} />
            <InputFile 
            placeHolder={"Enter Your Password"}
            onChange={(password)=>setPassword(password)}
            value={password}
            />
            <Button onClick={()=>alert(name+" "+password)} />

        </div>
    )
}
export default PracticeScreen;