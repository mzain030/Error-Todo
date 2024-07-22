import React from "react";
function Button(props)
{
    return(
        <div>
<button onClick={props.onClick}>Click me</button>
        </div>
    )
}
export default Button;