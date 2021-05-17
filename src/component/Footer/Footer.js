import Aux from '../../hoc/Auxiliary/Auxiliary'
import { Typography , Button } from '@material-ui/core';
import classes from './Footer.module.css'


const Footer =  () => {
    return(
        <p className={classes.Footer}> All rights reserved - © <a href="https://bojangagaleski.netlify.app/">Bojan Gagaleski</a></p>
    )
    
}
export default Footer