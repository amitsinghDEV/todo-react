import { useState } from "react"
function App() {
const [todo,setTodo]=useState([]);
const [title,setTitle]=useState('');
let handleSubmit = (e)=>{
  e.preventDefault();
  console.log(title);
  setTitle('');
  setTodo([...todo,title]);
  console.log(todo)

 }
 let deleteHandler=(i)=>{
  let copyTodo = [...todo];
  copyTodo.splice(i,1);
  setTodo(copyTodo);
  console.log(todo);
}
  return (
    <>
    <h1 style={{textAlign:"center"}}>Todos:</h1>
        <div className="mainContainer">
          <div className="inputContainer">
            <form onSubmit={handleSubmit}>
            <input type="text" name='inputField' placeholder="add todo" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <button > Submit</button>
            </form>
            
          </div>
          
        </div>
        {

todo.map((item,i)=>{
    return(
      <div style={{ display: "flex", justifyContent:"space-between"}}><h1  key={i}>{item}</h1>
      <button onClick={()=>{
        deleteHandler(i);
      }} style={{backgroundColor:"red"}}>Delete</button>
      </div>
      
    )
})
}
    </>
  )
}

export default App
