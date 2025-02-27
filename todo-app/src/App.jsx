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
          
    </>
  )
}

export default App
