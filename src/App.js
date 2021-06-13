import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

<Router>
<Header/>
  <Switch>
    <Route path="/">
    <div className="app__page">
<Sidebar />
<RecommendedVideos/> 

    </div>
    </Route>
    <Route path="/search/:searchTerm">
      <h1>search Page</h1>
    </Route>
  </Switch>
</Router>

    
    </div>
  );
}

export default App;
