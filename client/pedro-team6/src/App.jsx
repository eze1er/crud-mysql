import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD APP TEAM6</h1>
      <div className="form">
        <label htmlFor="">Movie Name</label>
        <input type="text" name="movieName" />
        <label htmlFor="">Review</label>
        <input type="text" name="movieName" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
