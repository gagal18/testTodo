/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import classes from './sign.module.css'
import ToDoList from '../ToDoList/ToDoList'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD5kCQ45ZQow1XzwLYhKlkJmlToSrTLb6o",
  authDomain: "to-do-app-185e7.firebaseapp.com",
  projectId: "to-do-app-185e7",
  storageBucket: "to-do-app-185e7.appspot.com",
  messagingSenderId: "170170787788",
  appId: "1:170170787788:web:3008453f9cbc84eb959f69",
  measurementId: "G-GT4YZLPTWF"
});


const auth = firebase.auth();

const Sign  = (props) =>{
    const [user] = useAuthState(auth);
    if(user){
      console.log('USER PROPS',user)
      console.log(props.history)
    }else{
      console.log('we dont have user')
    }
  return (
    <div className={classes.sign}>
      <section>
        {user ? <ToDoList user={user} /> : <SignIn />}
      </section>

    </div>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
    
  }

  return (
    <>
      <Button className="sign-in" variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
    </>
  )

}
export default Sign;
