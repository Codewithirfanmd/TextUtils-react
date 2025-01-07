import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const showAlert =(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500)
}
const toggleMode = (cls)=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
    showAlert("DarkMode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
    //setInterval(()=>{
    //  document.title = "TextUtils is Amazing Mode";
    //}, 2000)
    //setInterval(()=>{
    //  document.title = "Install TextUtils Now";
    //}, 1500)
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'White'
    showAlert("LightMode has been enabled", "success");
    document.title = "TextUtils - Light Mode";
}
}
return (
  <>
  {/* <BrowserRouter> */}
  <Navbar title="Textutils" aboutText="about" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
    <div className="container my-3">
  {/* <Routes>
      <Route exact path="/about" element={<About/>}/> */}
      {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode}/>}/> */}
      <Textform heading="Enter the text to analyze below" mode={mode}/>
  {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
  </>
);
}
export default App;
