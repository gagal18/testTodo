import { Typography , TextField , Button , Avatar } from '@material-ui/core';
import {useEffect ,useState} from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import axios from '../../axios-order'
const ToDoList = (props) =>{
    const [input, setInput] = useState();
    const [todo , setTodo] = useState('')
    const getData = async () =>{
        axios.get(`/data/${props.user.uid}.json`)
          .then(function (response) {
              const allTodo = response.data
              setTodo(allTodo)
            console.log(allTodo);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    useEffect(() => {
        getData()
    } , [])
    const putInData = (content) => {
        axios.post(`/data/${props.user.uid}.json` , {
            content: content
        })
        .then(function (response) {
            console.log(response);
            setInput(' ')
            getData()
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const deleteData = (id , content) => {
      axios.delete(`/data/${props.user.uid}/${id}.json`, {
    data: {content}
      })
    .then(function (response) {
      getData()
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    let dataOut = ''
    if(todo){
      dataOut= Object.entries( todo )
        .map( el => {
          console.log(el)
            return <li id={el[0]} key={el[0]}  onClick={(e) => deleteData(el[0] , el[1].content )}>{el[1].content}</li>
        })
    }
    

      console.log(props.user.photoURL)
    return(
    <Aux>

    <Typography variant="h3">To do list</Typography>
    <Typography variant="h3">Welcome {props.user.displayName} <Avatar src={props.user.photoURL}></Avatar></Typography>
    
      <div className="enterNew">
      <TextField id="standard-basic" label="New to-do" value={input} onChange={e => setInput(e.target.value)} />
      <Button variant="contained" onClick={() => putInData(input)}>Enter</Button>
      <Button variant="contained">Delete</Button>
      <ul>
      {dataOut}
      </ul>
      </div>
    </Aux>
    )
}

export default ToDoList