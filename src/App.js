import React from "react";
import "./App.css";
import MoodForm from "./MoodForm/MoodForm";

function App() {
  return (
    <div className="App">
      <h3>My Moods</h3>
      <MoodForm />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
