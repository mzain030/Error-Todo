import React from 'react';
import './style.css';
function Listing(){
  const myArr=[
  {Id:1,Name:'Khadam',Class:'FSC',Area:'Pattoki'},
  {Id:2,Name:'Ali',Class:'ICS',Area:'Pattoki'},
  {Id:3,Name:'Zain',Class:'ICS',Area:'Lahpre'},
  {Id:4,Name:'Ali',Class:'M.A Urdu',Area:'Pakpatan'}
  ]
  return (
    <div>
    {myArr.map((item,index)=>{
        return(
            < div className='main main-hover'> 
            <p>{item.Id}</p>
            <p>{item.Name}</p>
            <p>{item.Class}</p>
            <p>{item.Area}</p>
        </div>
        )
    })}
    </div>
  )
}

export default Listing;