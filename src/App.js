<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      
=======
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Logo from "./images/avatar.jpg";
import Data from "./data";
import Header from "./components/header";

function App() {
  return (
    <div>
      {Data.map(item => (
        <Header key={item.id} text={item.text} sub={item.sub} />
      ))}
>>>>>>> d46730a86cae892143438055bb8cc6bcb16a6e72
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d46730a86cae892143438055bb8cc6bcb16a6e72
