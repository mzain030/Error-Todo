import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const history=useNavigate();
    // const header={"Access-Control-Allow-Origin":"*"};
    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log('click');
        axios.post(
            'https://62f7e90273b79d0153608cfa.mockapi.io/crud-practice-API',{
                name:name,
                email:email,
                // header,
            })
            .then(()=>{
                history("/read")
            });
            
    };
  return (
    
    <>
   
    <div className='d-flex justify-content-between m-4'>
    <h2>Create</h2>
    <Link to="/read"><button className='btn btn-primary'> Show Data</button></Link>
    </div>
    <form>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name:</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Email:</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
   
    </>

  )
}
export default Create;
