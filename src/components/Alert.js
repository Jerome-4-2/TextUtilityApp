import React from 'react'

const Alert = (props) => {
    const capitalise = (word) =>{
      if(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      else{
        // Handle the case where word is undefined
        return ""; // Or return a default value
      }
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)} </strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert