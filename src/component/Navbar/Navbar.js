import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import {
  selectText
} from '../../store/dataSlice';
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import openImg from '../../assets/download.png'
import closeImg from '../../assets/download1.png'




const auth = firebase.auth();

function Navbar() {
  const [mobileNav,setMobileNav] = useState(false);
  const text  = useSelector(selectText)
  console.log('NAVBAR',text)
  let name = text ? <Aux>
    <div>
    <span>{text.displayName}</span>
    <img src={text.photoURL} alt={text.photoURL}></img>
    </div>
    <div className={classes.btn}>
    <SignOut />
    </div>
  
  </Aux> : <p></p>
const mobileToggle = () => {
      setMobileNav(!mobileNav)
}
let mobNav = mobileNav ? <Aux>
<Button onClick={mobileToggle}><img src={openImg} alt='open'></img></Button>
</Aux> : <Aux>

<Button onClick={mobileToggle}><img src={closeImg} alt='close'></img></Button>
<ul>
  <li><Link to="/testTodo">Home</Link></li>
  <li><Link to="/testTodo/sign">Sign in</Link></li>
</ul>
  
</Aux>
    return (
      <div className = {classes.Navbar}>
        <div className = {classes.Elem}>
        {name}
        </div>
        <div className = {classes.ElemLink}>
        <Link to="/testTodo">Home</Link>
        <Link to="/testTodo/sign">Sign in</Link>
        </div>
        <div className = {classes.Mobile}>
       {mobNav}
        </div>
      </div>
    );
    
    function SignOut() {
      return auth.currentUser && (
        <Button variant="contained" onClick={() => auth.signOut()}>Sign Out</Button>
      )
    }
    
  };
  export default Navbar