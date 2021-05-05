/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,Link } from 'react-router-dom';
import Sign from './component/sign/sign'
import Home from './containers/Home/Home'
import Navbar from './containers/Navba/Navbar'
import './App.css'
function App() {



  return (
    <div className="App">
     <main>
     <Navbar/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/sign" component={Sign} exact />
            </Switch>
        </main>
        
    </div>
  );
}

export default App;
