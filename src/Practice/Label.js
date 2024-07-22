import { getByTitle } from "@testing-library/react";
import React from "react";
function Label(props){
    return(
        <div>
<label>{props.title}</label>
<h1>{props.h1}</h1>
        </div>        
    )
}
export default Label;