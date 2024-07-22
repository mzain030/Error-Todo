import React from "react";
import { useState } from "react";
import Label from "../Components/Label";
import ImagePicker from "../Components/ImagePicker";
function Screen1()
{
    const [profileImgPath, setProfileImgPath]=useState();
    const [CoverImgPath, setCoverImgPath]=useState();
    return(
        <div>
    <Label h1={"Choose Profile Image "}
    imgPath={profileImgPath}
    pickFile={(value) => setProfileImgPath(value)}
    />
    <ImagePicker/><br/><hr/>
    <Label  h1={"Choose Cover Image "}
    imgPath={CoverImgPath}
    pickFile={(value)=>setCoverImgPath(value)}/>
    <ImagePicker/>
        </div>
    )
}
export default Screen1;