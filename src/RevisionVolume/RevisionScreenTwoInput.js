import React from "react";
function RevisionScreenTwoInput(props){
    
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
        <>
        {props.imgPath==''?<input type={'file'} onChange={(e)=>readUrl(e.target)}/>:null}
        {props.imgPath != ('') ?<img src={props.imgPath} style={{ height: 90, width: 90 }} />:null}
        {props.imgPath !=('')?<button onClick={()=>props.pickFile('')}>clear</button>:null}
        </>
    )             
}
export default RevisionScreenTwoInput;