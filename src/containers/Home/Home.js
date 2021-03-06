import classes from './Home.module.css';
import { Typography , Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  selectText
} from '../../store/dataSlice';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useEffect } from 'react';

const auth = firebase.auth();


const Home = (props) => {
  const text  = useSelector(selectText)
  useEffect(()=>{
    if(text.email){
      console.log(text.email)
      props.history.push('/testTodo/sign')
    }else{
        console.log('there is no EMAIL')
        props.history.push('/testTodo')
    }
  
  }, [])
    let homeRen = text.email ? <p>
      <Typography variant="h3">You are succsesfully logged in! </Typography>
     
    <Button variant="contained" onClick={()=>{props.history.push('/testTodo/sign')}}>Go to the list</Button>
  </p> : <Aux>
        <Typography variant="h3">Task list</Typography>
        <Typography variant="h4">Please log in!</Typography>
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