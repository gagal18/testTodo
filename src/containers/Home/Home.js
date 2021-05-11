import classes from './Home.module.css';
import { Typography , Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  selectCountText
} from '../../store/counterSlice';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useEffect } from 'react';

const auth = firebase.auth();


const Home = (props) => {
    const text  = useSelector(selectCountText)
    useEffect(() => {
        
        console.log('HOME',text)
        if(!text){
            props.history.push('/testTodo')
        }else{
            props.history.push('/testTodo/sign')
        }
    })
    
    let homeRen = text ? <p>
    You are logged in  
  </p> : <Aux>
        <Typography variant="h3">To do list</Typography>
        <Typography variant="h4">Please log in</Typography>
        <SignIn />
        </Aux>
        
    return(
        <div className = {classes.Home}>
            {homeRen}
        </div>
    )
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
}
export default Home