import React from "react";
function W3schooPractice(){
//    const val=".....";
//    const hello=(val)=>"khdam"+val;
const myArray=['Apple','Banana','Mango'];
function calculateCount(a,b){
    
}

        return(
        <>

        {/* <p>{myArray.toString()}</p> */}
        
        {myArray.map((item)=>{
            return(
                <>
                <h2>{item}</h2>
                </>
            )
        })}
        </>
    )
}
export default W3schooPractice;