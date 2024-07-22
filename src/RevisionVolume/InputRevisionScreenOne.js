import React from "react";
function InputRevisionScreenOne(props){
    return(
        <>
        <input type={'text'} placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.onChange(e.target.value)}
        
        //  onClick={e)=>}
         ></input>
        </>
    )
}
export default InputRevisionScreenOne;