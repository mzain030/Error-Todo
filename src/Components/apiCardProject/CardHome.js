import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GET_USER } from '../../generic/api'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardHome = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    function getData(){
        axios.get('https://6313798eb466aa9b039a2434.mockapi.io/card').then((response)=>{
            console.log('get Response',response);
            setData(response.data)
        }).catch((error)=>{
            console.log('get error',error);
            setError(true);
        }).finally(()=>{
            setLoading(false);
        })
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
        

        
{data?.map((item)=>{
    return(
        <>
        <Card style={{ width: '18rem' }} className={'mt-4'}>
      <Card.Img variant="top" src={item?.images} />
      <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</>
    )
})} 
    </>
    
  )
}

export default CardHome