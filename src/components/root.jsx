import React from 'react';
import Navbar from './Navbar';
import Alert from './Alert';
import TextForm from './TextForm';

export default function root({ mode, toggleMode, showAlert }) {
  return (
    <>
    
     <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode} aboutText = 'About' />
      <Alert alert = {alert}/>
      <div className="container my-3">
      <TextForm  heading = "Enter text to analyse" mode={mode} showAlert={showAlert} />
      {/* <About/>  showAlert={showAlert} */}
      </div>  
      
    </>
  )
}
