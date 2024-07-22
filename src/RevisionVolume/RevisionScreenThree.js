import React, { useEffect, useState } from "react";
function RevisionScreenThree(){
     const [firstItem,setItemOne]=useState('');
     const [countArray,setCountArray]=useState([]);
     const [secondItem,setItemSecond]=useState('');
     const [countArrayOne,setCountArrayOne]=useState([]);
     function calculateCount(){
        let tempArray=firstItem.split('');
        let tempObj={}
        for(let i=0;i<tempArray.length;i++){
            let char=tempObj[tempArray[i]];
            if(char){
                tempObj[tempArray[i]]=char+1;
            }
            else{
                tempObj[tempArray[i]]=1;
            }
        }
        let entriesOne=Object.entries(tempObj);
        setCountArray(entriesOne);
        console.log(entriesOne);

     }
     function calculateCountOne(){
        let tempArrayOne=secondItem.split('');
        let tempObjOne={};
        for(let i=0;i<tempArrayOne.length;i++){
            let charOne=tempObjOne[tempArrayOne[i]];
            if(charOne){
                tempObjOne[tempArrayOne[i]]=charOne+1}
                else{
                    tempObjOne[tempArrayOne[i]]=1;
                }
             let entriesTwo=Object.entries(tempObjOne);
             setCountArrayOne(entriesTwo);
        }
    }
     useEffect(()=>{
        calculateCount();
        
     },[firstItem])

useEffect(()=>{
    calculateCountOne();
},[secondItem])
    return(
        <>
        <h1>Count items</h1><hr/>
        <h3 >Input Field One</h3>
        <input type={'text'} onChange={(e)=>setItemOne(e.target.value)} value={firstItem}/>
        {countArray.map((item)=>{
            return(
                <>
                <br></br><h7>{item[0]+"=>"+item[1]}</h7><br />
                </>
            )
            
        })}<hr/>
         <h1>Input Field two</h1> 
        <input type={'text'} onChange={(e)=>setCountArrayOne(e.target.value)}/>
        {countArrayOne.map((item)=>{
            return(
                <>
                <br/>
                <h7>{item[0]+"==>"+item[1]}</h7><br/>
                </>
            )
        })}
     
        </>
    )
}
export default RevisionScreenThree;