/* eslint-disable no-unused-vars */
import React, { Component  , useEffect} from 'react';
import { BrowserRouter, Route, Switch ,Link } from 'react-router-dom';
import Sign from './component/sign/sign'
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectCountText
} from './store/counterSlice';
import Home from './containers/Home/Home'
import Navbar from './component/Navbar/Navbar'
import './App.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
const auth = firebase.auth();



function App() {
  const [user] = useAuthState(auth);
  const text  = useSelector(selectCountText)
  console.log(text)
  const dispatch = useDispatch();
  if(user){
    console.log('I am from HOME',user)
    dispatch(increment(user))
    console.log('HIELLOE FROM REDUX',text)
  }else{
    console.log('we dont have user')
    dispatch(increment('null'))
  }


  return (
    <div className="App">
     <main>
     <Navbar/>
            <Switch>
                <Route path="/testTodo" render={(props) => <Home {...props} />} exact />
                <Route path="/testTodo/sign" render={(props) => <Sign {...props} />}  exact />
            </Switch>
        </main>
        
    </div>
  );
}


export default App;
