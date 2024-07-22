import React,{useState} from "react";
function InputComponent(props){
    
    return(
        <div>
            <input type={"text"} placeholder={props.Placeholder}
            value={props.value} 
            onChange={(event)=>props.onChange(event.target.value)} />
        </div>
    )
};
export default InputComponent;    