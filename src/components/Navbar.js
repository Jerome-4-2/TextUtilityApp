import React, {useState} from "react";
import PropTypes from 'prop-types'


export default function Navbar(props) {

  const handleButtonClick = (color) => {
    let backgroundColor;
    switch (color) {
      case '1':
        backgroundColor = props.mode === 'light' ? '#f55c3a' : '#822d1a';
        break;
      case '2':
        backgroundColor = props.mode === 'light' ? '#564fb1' : '#282551';
        break;
      case '3':
        backgroundColor = props.mode === 'light' ? '#571f3e' : '#3a162a';
        break;
      case '4':
        backgroundColor = props.mode === 'light' ? '#6f612e' : '#3f371a';
        break;
      case '5':
        backgroundColor = props.mode === 'light' ? '#18390e' : '#112909';
        break;
      case '6':
        backgroundColor = props.mode === 'light' ? '#a90505' : '#4d0606';
        break;
      default:
        backgroundColor = '#ffffff'; // Default color
    }
    console.log(`Button ${color} was pressed`);
    console.log(`${props.mode === 'light' ? 'Light' : 'Dark'} mode`);
    document.body.style.backgroundColor = backgroundColor;
  };


  return (

     <nav className={`navbar navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.mode}> 
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <button key={num} type="button" className={`btn btn-custom-color-${num}`} onClick={() => handleButtonClick(num.toString())}>{num}</button>
                  ))}
            </div>

          </div>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        </div>        
      </div>
    </nav>
  );
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}
Navbar.defaultProps = {title: 'Set title here',
                        aboutText: 'About text here'}