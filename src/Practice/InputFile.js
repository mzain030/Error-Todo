import React from "react";
function InputFile(props){
    console.log('lolzzz===>',props.onChange);
    return(
        <div>
         <input type={'text'} 
         placeholder={props.placeHolder} 
         value={props.value}
         onChange={(e)=>props.onChange(e.target.value)}/>
        </div>
    )
}
export default InputFile;     