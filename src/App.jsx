import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
import NoSpell from './components/NoSpellZone'
import DarkMode from './components/DarkMode'
import AboutUs from './components/AboutUs'
import {
  BrowserRouter as Router,
 
  Link
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';


export default function App (){
  const[mode,setMode]=useState('light');

  const toggleMode =()=>{
    console.log("toggled")
   if(mode=== 'light'){
    setMode('dark')
    document.body.style.backgroundColor='black';
    // document.body.style.color='white';
   }
   else{ 
    setMode('light')
    document.body.style.backgroundColor='white';
    // document.body.style.color='black';
    }
  }
    return (
      
     
      
<Router> 
      <NavBar heading="Text Utils" mode={mode} toggleMode={toggleMode}/ >
      <div className="container">
        <Routes>
        <Route path='/about' element={<AboutUs mode={mode}/>} />
        <Route path='/' element={<TextForm mode={mode}/>} />
        <Route path='/noSpell' element={<NoSpell mode={mode}/>} />
        </Routes>

    





      </div>
</Router>
      
    )
  }

