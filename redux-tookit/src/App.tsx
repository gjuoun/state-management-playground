import React, { useEffect } from "react";
import { decrement, increment, useAppDispatch, useAppSelector } from "./store";

export const App = () => {
  // const count = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()

  // console.log("---parent render")
  // useEffect(() => {
  //   console.log("parent: count changed",count)
  // }, [count])

  return <div>hello
    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>

    <ChildApp num={1}/>
    <ChildApp num={2}/>
  </div>
};


export const ChildApp = ({num}: {num: number}) => {
  // const count = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()

  console.log("---child render", num)

  // useEffect(() => {
  //   console.log("child1:count changed",count)
  // }, [count])

  return <div>hello child {num}
   <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>

  </div>;
}