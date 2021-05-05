import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import classes from './Navbar.module.css'


function Navbar(props) {
    return (
      <div className = {classes.Navbar}>
        <Link to="/testTodo">Home</Link>
        <Link to="/testTodo/sign">Sign in</Link>
      </div>
    );
  };
  export default Navbar