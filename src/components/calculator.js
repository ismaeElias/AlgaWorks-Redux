import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subtract, sum } from '../store/calculator/calculator.actions';

function Calculator(){
  const dispatch = useDispatch();
  const result = useSelector(state => state.calculator)
  const [ a, setA] = useState(0);
  const [ b, setB] = useState(0);

  return(
    <>
      <input placeholder='a' type="number" value={a} onChange={(e) => {
        setA(Number(e.target.value))
      }}/>
      <input  placeholder='b' type="number" value={b} onChange={(e) => {
        setB(Number(e.target.value))
      }}/>

      <button onClick={()=> {
        dispatch(sum(a,b))
      }}>somar</button>
      <button onClick={()=>{
        dispatch(subtract(a,b))
      }}>subtrair</button>

      <div>
        { result }
      </div>
    </>
  )
}


export default Calculator