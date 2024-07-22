import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ADD_USER, UPDATE_USER } from '../../generic/api';

const AddUser = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const {state}=useLocation();
    console.log("abc",state)

    const navigate=useNavigate();
    const isExistingUser=state&&Object.keys(state).length>0;
    
    useEffect(()=>{
      if(isExistingUser){
        const {item}=state;
        setFirstName(item?.firstName);
        setLastName(item?.lastName);
        setPhone(item?.phone);
        setEmail(item?.email);
        setPassword(item?.password);
      }
    },[])
    
    
    const manageUser=()=>{
        setLoading(true);
        if(isExistingUser){
          const {item}=state;
          axios.put(UPDATE_USER+`/${item?.id}`,{firstName,lastName,phone,email,password})
          .then((response)=>{
            navigate(-1);       
            console.log('update response.... ',response);
          }).catch((error)=>{
            console.log('update error....',error);
          })
        
        }
        else{
        axios.post(ADD_USER,{firstName,lastName,phone,email,password})
        .then((response)=>{
            console.log("lolzzz==>",response)
            navigate(-1);
        }).catch((error)=>{
            console.log("lolzzz===>",error)
        }).finally(()=>{
            setLoading(false);
        })
    }
  }
  return (
   <>
   <h1 className='mt-4'>{isExistingUser?'Update User':'Create New User '}</h1><hr/><br/>
{loading?<h2>{isExistingUser ?"updating User":"Adding User...."}</h2>:
<form>
<div className="form-group">
    <label for="exampleInputPassword1">First Name</label>
    <input type="text" className="form-control"
    onChange={(e)=>setFirstName(e.target.value)}
     value={firstName}
    />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="text" className="form-control"
     onChange={(e)=>setLastName(e.target.value)}
     value={lastName}
    />
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="text" className="form-control" 
     onChange={(e)=>setPhone(e.target.value)}
     value={phone}
    />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="Email" className="form-control"
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
  </div>
 <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"
    onChange={(e)=>setPassword(e.target.value)}
    value={password}
    />
  </div><br/>
  <button type="submit" className="btn btn-primary" onClick={manageUser}>{isExistingUser?"Update":"Submit"}</button>
</form>}
  </>
  )
}

export default AddUser;