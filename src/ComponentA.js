import React,{ useReducer} from 'react';
//import { First, Sec } from './App';


const Initialstate={
  FirstCounter:0
}

const reducer=(state,action)=>{
  //console.log(state)
  //console.log(action)

  switch(action.type){
    case 'inc':
      return{FirstCounter:state.FirstCounter+action.value}
    case 'dec':
      return{FirstCounter:state.FirstCounter-action.value}
    case 'reset':
      return Initialstate
    default:
      return state  

  }
}
function ComponentA() {

const[Res,Fun]=useReducer(reducer,Initialstate)

  return(
    <div>
    <h1>{Res.FirstCounter}</h1>  
    <button onClick={()=>Fun({type:'inc',value:5})}>inc</button>
    <button onClick={()=>Fun({type:'dec',value:5})}>dec</button>
    <button onClick={()=>Fun({type:'reset'})}>reset</button>


    </div>

  )
  
}

export default ComponentA