import React, { useState } from 'react';


export default function TextForm(props) {
  const [text, setText] = useState("");
  const [trimmedText, setTrimmedText] = useState("");

  const handleTrimText = () => {
    const lines = text.split('.').slice(0, 4);
    const trimmedText = lines.join('\n');
    setTrimmedText(trimmedText);
  }

  const handleUpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }

  const handleLowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")

  }

  const handleCopy = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnchange = (event)=>{ 
    console.log("Something changed in text area");
    setText(event.target.value);
  }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>        
          <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'light' ? '#f2f2f2':'#494949', 
                color: props.mode === 'light' ? 'black' : 'white'}} onChange ={handleOnchange} 
                  value={text} rows="9"></textarea>
                <button type="button" onClick={handleUpperCase} className="btn btn-primary my-3 mx-1">UpperCase</button>
                <button type="button" onClick={handleLowerCase} className="btn btn-primary my-3 mx-1">LowerCase</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary my-3 mx-1">Copy</button>
                <button type="button" className="btn btn-primary my-3 mx-1">Remove space</button>  
                <button type="button" onClick={handleTrimText} className="btn btn-primary my-3 mx-1">Trim Text</button>              
            </div>                
    </div>
    <div className='container my-3' style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.replace(/\s+/g, ' ').trim().split(' ').length} Words, {text.length} characters</p>
      <p>Time to read: {(text.replace(/\s+/g, ' ').trim().split(' ').length) * 0.5 }s</p>
      <h2>Preview</h2>
      <p>{trimmedText}</p>
    </div>
    </>
  )
}
