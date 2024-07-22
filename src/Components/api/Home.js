import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_USER } from '../../generic/api';

import { DELETE_USER } from '../../generic/api';
import { type } from '@testing-library/user-event/dist/type';
import ListItem from './ListItem';


const Home = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [searchValue,setSearchValue]=useState('');
    const history=useNavigate();
    const addUser=()=>{
    history('/adduser')
    }
    function getData(){
        axios.get(GET_USER).then((response)=>{
            console.log('khk===>',response);
            setData(response?.data)
        }).catch((error)=>{
          console.log('khk===>',error);
          setError(true);
        }).finally(()=>{
            setLoading(false);
        })
    }
  function searchData(){
    const newData=data.filter((item,index)=>{
const str=item?.firstName+item?.lastName+item?.phone+item?.email;
if(str?.toLowerCase()?.includes(searchValue)){
  return item;
} 
    });
    return newData;
  }
    // function handleDeleteUser(id){
    //  axios.delete(DELETE_USER+`/${id}`)
    //  .then((response)=>{
    //   console.log("Delete user response",response)
    //   let tempData=data?.filter((item)=>item?.id!==id);
    //   console.log("data after delete",tempData);
    //   setData(tempData);
    //  })
    //   .catch((error)=>{
    //     console.log("Delete user Error",error)})
    // }
  
  
  useEffect(()=>{
searchData();
  },[searchValue])
    useEffect(()=>{
     getData();
    },[])
  return (
    <>
    <div className='d-flex justify-content-between m-4'>
       <h1>Users Details</h1>
      <input type={'search'} placeholder={'Search Here'} onChange={(e)=>setSearchValue(e.target.value)} style={{borderRadius:30}}></input>
       <button style={{borderRadius:50}} type="button" class="btn btn-primary" onClick={addUser}>Create User</button>
       </div>
       <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
{searchData().length>0?searchData()?.map((item,index)=>{
  return(
    
        <ListItem data={data} onDeleteSuccess={(data)=>setData(data)} item={item} index={index}/>
    )
    }):<h2>No matching data found</h2>}

    

</tbody>
  </table>

    </>
  )
}

export default Home;