import React,{useReducer} from 'react'
const Initialstate=0

const Reducer=(state,action)=>{
  switch(action){
    case 'inc':
      return state+1
    case 'dec':
      return state-1
    case 'reset':
      return Initialstate 
    default:
      return state     
  }

}

function App() {
  const [res,supfun]=useReducer(Reducer,Initialstate)
  return (
    <div>
      <h1>{res}</h1>
      <button onClick={()=>supfun('inc')}>increase</button>
      <button onClick={()=>supfun('dec')}>decrease</button>
      <button onClick={()=>supfun('reset')}>reset</button>

    </div>
  )
}

export default App