import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { Typography , Button } from '@material-ui/core';

const Home = () => {
    return(
        <div className = {classes.Home}>
        <Typography variant="h3">To do list</Typography>
        <Typography variant="h4">Please log in</Typography>
        <Link to="/sign"><Button variant="contained">Sign in</Button></Link>
        
        </div>
    )
}
export default Home