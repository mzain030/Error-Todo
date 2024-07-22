import axios from "axios";
import React, { useEffect, useState } from "react";
import Style from './Style.css'
function Listing(){
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('https://api2.binance.com/api/v3/ticker/24hr')
        .then((response)=>{
          console.log(response);
          setData(response.data.slice(0,20));
          
        }).catch((error)=>{
            setError(true);
           console.log(error);
        }).finally(()=>{
setLoading(false);
        });
    },[]);
if(loading){
    return(
   <div className="MainLoader"> <div class="loader"></div></div>
    )
}
if(error){
    return(
        <div className="MainLoader"> <div class="loader"></div></div>
         )
}
    return(
        <>
        <div className="mainContainer"> 
{data.map((item,index)=>{
    console.log(item);
    return(
    <>
        
        <div className="combine">
        <div className="divOne">
            <div className="blockOne">{item.symbol.charAt(0)}</div>   
         <div className="blockThree">
         <h7 >{'Count: '+item.count}</h7><br/>
         <h7>{'HighPrice: '+item.highPrice}</h7><br/>
         <h7>{'LowPrice: '+item.lowPrice}</h7>
         <br/>
         </div>
         </div>
         <div className="blockTwo">{item.priceChangePercent}</div> 
         </div> 
        
        <br/>
        </>
    )
})}
</div>
        </>
    )
};
export default Listing;