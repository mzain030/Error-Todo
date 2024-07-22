
import { useEffect, useState } from 'react';
import W3schooPractice from './Practice/W3schooPractice';
import logo from './logo.svg';
import PracticeScreenTwo from './Practice/ParacticeScreenTwo';
import PracticeScreen from './Practice/PracticeScreen';
// import Listing from './Practice/PracticeScreenFour';
import PracticeScreenThree from './Practice/PracticeScreenThree';
import PracticeScreenV1 from './Practice/PracticeScreenV1';
import Screen from './Screens/Screen';
import RevisionScreenOne from './RevisionVolume/RevisionScreenOne';
import RevisionScreenTwo from './RevisionVolume/RevisionScreenTwo';
import RevisionScreenThree from './RevisionVolume/RevisionScreenThree';
import Create from './CRUDAPP/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './CRUDAPP/Read';
import Update from './CRUDAPP/Update';
import addUser from './Components/api/AddUser';
import Home from './Components/api/Home';
import AddUser from './Components/api/AddUser';
import EditImage from './Components/api/EditImage';
import CardHome from './Components/apiCardProject/CardHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Components/Buttons';
import ButtonsScreen from './Components/ButtonsScreen';
import Listing from './Components/Listing';
import buttonExample from './Components/materialUi/buttonExample';
// import ButtonScreen from './Components/ButtonScreen';
function App() {
  const [number,setNumber]=useState(0);
  function increment(){
      setNumber(number+1);
  }
  function decrement(){
      if(number!=0){
      setNumber(number-1);
      }
  }
  return (

   <div className='container'>   
   {/* <buttonExample/> */}
    {/* <Screen/>
       <PracticeScreen/>
    <PracticeScreenV1/>
     <PracticeScreenTwo/>
    <PracticeScreenThree/>
    <Listing/>
 <W3schooPractice/> */}

    
{/* revision */}
{/* <RevisionScreenOne/> */}
{/* <RevisionScreenTwo/> */}
{/* <RevisionScreenThree/> */}

<BrowserRouter>
      <Routes>
        {/* khadam work 2 input  */}
        {/* <Route exact path="/" element={<Create/>}></Route> */}
        
        {/* CRUD Application */}
        <Route exact path="/read" element={<Read/>}></Route>
        <Route exact path="/update" element={<Update/>}></Route>
         <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/adduser" element={<AddUser/>}></Route>

          
         {/*  <Route exact path='/' element={<CardHome/>}></Route> *}
         <Route exact path='/' element={<ButtonsScreen number={number} increment={()=>increment()} decrement={()=>decrement()} />}>
              </Route>*/}
       
      </Routes>

    </BrowserRouter>
  
    {/* <Listing/> */}
{/* <h1>{number}</h1> */}
    </div>
  )
}

export default App;
