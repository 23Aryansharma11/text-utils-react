import React, { useState } from 'react'
import PropTypes from "prop-types";
export default function TextForm(props) {
  const style={
    color:props.mode==='light'?'black':'white',

  }
    const [text,setText] = useState('');
    const handelOnChange =()=>{
     setText(event.target.value);
    }

   const handelUpperCase =()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
   }
   
const handelLowerCase =()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
   }

   const handelClear=()=>{
    setText('');
   }
    return (
    <div style={style}>
<div className="mb-3" >
  <h1 >Enter Text Here </h1>
  <textarea  className="form-control" style ={{backgroundColor:'transparent', resize:'none' ,color:props.mode==='light'?'black':'white' }}  id="my-box" rows="3" value={text} onChange={handelOnChange} ></textarea>
  <button className="btn btn-primary mx-1 my-2" onClick={handelUpperCase}>UPPER-CASE</button>
  <button className="btn btn-secondary mx-1 my-2" onClick={handelLowerCase}>lower-case</button>
  <button className="btn btn-danger mx-1 my-2" onClick={handelClear}>Clear text</button>
</div>
    </div>
  )
}
