import { useReducer } from "react";

function Count(){
    const reducer = (state,action)=>{
        if(action.type=== "INC"){
            return state+1;
        }
        if(action.type=== "DEC"){
            return state-1;
        }
         if(action.type=== "two"){
            return state+2;
        }
        if(action.type=== "DEC2"){
            return state-2;
        }
    }
    const[state,dispatch]= useReducer(reducer,0);
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"INC"})}>+1</button>
        <button onClick={()=>dispatch({type:"DEC"})}>-1</button>
        <button onClick={()=>dispatch({type:"two"})}>+2</button>
        <button onClick={()=>dispatch({type:"DEC2"})}>-2</button>
        </>
    )
}
export default Count;