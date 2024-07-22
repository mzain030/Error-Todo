import React from "react";
import Images from "../Images/cross.png"
function InputImagePicker(props){
    function readUrl(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                props.pickFile(e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
       return(
        <div>
{props.imgPath==''?<input type={'file'} 
onChange={(e)=>readUrl(e.target)}
/>:null}
{props.imgPath != '' ? <img 
src={props.imgPath}
 style={{ height: 90, width: 90 }} />:null}
  
{props.imgPath!=""?<img src={Images} style={{height:20,width:20}}
  onClick={()=>props.pickFile('')}/>:null}


  
        </div>
    )
}
export default InputImagePicker;