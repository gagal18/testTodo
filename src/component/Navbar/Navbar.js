import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import {
  selectCountText
} from '../../store/counterSlice';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';





const auth = firebase.auth();

function Navbar() {
  const text  = useSelector(selectCountText)
  console.log('NAVBAR',text)
  let name = text ? <p>
    <span>{text.displayName}</span>
    <img src={text.photoURL} alt={text.photoURL}></img>
    <SignOut />
  
  </p> : <p></p>

    return (
      <div className = {classes.Navbar}>
        <div className = {classes.Elem}>
        {name}
        </div>
        <div className = {classes.ElemLink}>
        <Link to="/testTodo">Home</Link>
        <Link to="/testTodo/sign">Sign in</Link>
        </div>
      </div>
    );
    function SignOut() {
      return auth.currentUser && (
        <Button className="sign-out" variant="contained" onClick={() => auth.signOut()}>Sign Out</Button>
      )
    }
    
  };
  export default Navbar