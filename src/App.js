import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/root";
function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("LightMode Enabled", "success");
      document.title = "TextUtils - darkMode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("DarkMode Enabled", "success");
      document.title = "TextUtils - lightMode"
    }
  }

  const showAlert = (message, type) => {
    setAlert({   
      msg: message,
      type: type    
    });
    setTimeout(() => {
      setAlert(null);        
    }, 1500);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ]
    },
  ]);


  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;

//Here Navbar TextForm and About are react Components...
