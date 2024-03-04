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
    </div>
  );
}

export default App;