import React, { useState } from "react";
import RevisionScreenTwoInput from "./RevisionScreenTwoInput";
function RevisionScreenTwo(){
const [profileImgPath,setProfileImgPath]=useState('');
const [coverImgPath,setCoverImgPath]=useState('');
    return(
        <>
<h1> Choose Profile Picture</h1>
<RevisionScreenTwoInput 
imgPath={profileImgPath}
 pickFile={(profileImgPath)=>setProfileImgPath(profileImgPath)}
/>
<h1> Choose Cover Picture</h1>
<RevisionScreenTwoInput 
imgPath={coverImgPath} 
pickFile={(coverImgPath)=>setCoverImgPath(coverImgPath)}
/>
        </>
    )
}
export default RevisionScreenTwo;