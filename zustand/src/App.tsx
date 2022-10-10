import React, { useEffect } from "react";
import create from 'zustand';

interface State {
  count: number;
  tft: string;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<State>( (set)=> ({
  count: 0,
  tft: "tft",
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));


export const App = () => {
  // const { increment, decrement} = useStore();

  console.log("---parent render---")
  // useEffect(()=> {
  //   console.log("parent: count changed", count);
  // },[count])

  return <div>
    hello parent

{/* <button onClick={increment}> increment</button>
<button onClick={decrement}> decrement</button> */}
    <ChildApp num={1}></ChildApp>
    <ChildApp num={2}></ChildApp>
  </div>;
};


const ChildApp = ({num}: {num: number})=> {
  const {increment, decrement} = useStore();


  console.log("---child render---", num)

  // useEffect(()=> {
  //   console.log("child: count changed", count);
  // },[count])
  
  return <div>child {num}
  <button onClick={increment}> increment</button>
  <button onClick={decrement}> decrement</button>
  </div>
}