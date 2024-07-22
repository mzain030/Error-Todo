import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

 const Read = () => {
    const [data,setData]=useState([]);
    const a = 5;
    const [tableDark,setTableDark]=useState('');
    const [inputText,setInputText]=useState('');
    function getData(){
        axios.get('https://62f7e90273b79d0153608cfa.mockapi.io/crud-practice-API').
        then((res)=>{
            console.log(res.data);
            setData(res.data);
        });
    }
    function handleDelete(id){
      axios.delete(`https://62f7e90273b79d0153608cfa.mockapi.io/crud-practice-API/${id}`
      )
      .then(()=>{
        getData();
      })
    }
    function setToLocalStorage(id,name,email){
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);

    }
   
    useEffect(() => {
        getData();
    }, [])
    const setInputHandler=(e)=>{
      setInputText(e.target.value.toLowerCase());
    }
  return (
    <>
     <div class="form-check form-switch m-3">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" 
  onClick={()=>{
  {
    (tableDark==='table-dark')? setTableDark("")
    : setTableDark("table-dark")}
  }}/>
</div>
    <div className='d-flex justify-content-between m-4'>
    <h2>Read Operation</h2>
    <div className="mb-3">
 
    <input type='search' className="form-control" placeholder='search here' onChange={setInputHandler}/>
  </div>
    <Link to="/"><button className='btn btn-secondary'> Create</button></Link>
    </div>
    <table className={`table ${tableDark}`}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
 
    {data.filter((el)=>{
      if(el===''){
        return el
      }
      else{
        return(el.name.toLowerCase().includes(inputText)||el.email.toLowerCase().includes(inputText))
      }
    }).map((item)=>{
        return(
            <>
             <tbody>
            <tr>
              
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <Link to={'/update'}>
        <button type="button" class="btn btn-success"
        onClick={()=>setToLocalStorage(
          item.id,
          item.name,
          item.email
        )}
        >Edit</button></Link>
        </td>
      <td><button type="button" class="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button></td>
    </tr> </tbody>
            </>
        )
    })}
    
  
</table>
    </>
  )
}
export default Read;
