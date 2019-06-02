import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
