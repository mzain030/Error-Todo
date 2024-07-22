import React from "react";
import { useState } from "react";
function ImagePicker(props)
{
    function readUrl(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                props.pickFile(e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    return(
<div>
<input type={"file"} onChange={(e)=>readUrl(e.target)}/>
<img src={props.imgPath} style={{ height: 90, width: 90 }} />
<button onClick={()=>props.pickFile('')}>Clear</button>
</div>
    )
}
export default ImagePicker;