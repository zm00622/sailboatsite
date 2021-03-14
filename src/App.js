import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Gallery from './contents/Gallery';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Route path="/canyon-theme" exact component={Home} /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
      </Switch>      
    </div>
    </Router>
    );
  }
  
  export default App;
  