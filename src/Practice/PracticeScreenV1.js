import React, { useState } from "react";
import InputImagePicker from "./InputImagePicker";
import Label from "./Label";
function PracticeScreenV1()
{ 
    const [profileImgPath,setProfileImgPath]=useState('');
    const [coverImgPath,setCoverImgPath]=useState('');
    
    return(
        <div>
            <Label h1={'Choose Profile Image'}/>
                <InputImagePicker 
                        imgPath={profileImgPath}
                            pickFile={(value) => setProfileImgPath(value)}
/>
        <Label h1={'Choose Cover Image'}/>
            <InputImagePicker
                        imgPath={coverImgPath}
                            pickFile={(value) => setCoverImgPath(value)}
/>
        </div>
    )
}
export default PracticeScreenV1;