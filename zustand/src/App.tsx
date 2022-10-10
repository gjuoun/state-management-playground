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
  const {count, increment, decrement} = useStore();

  console.log("---parent render---")
  useEffect(()=> {
    console.log("parent: count changed", count);
  },[count])

  return <div>
    hello parent

<button onClick={increment}> increment</button>
<button onClick={decrement}> decrement</button>
    <ChildApp></ChildApp>
  </div>;
};


const ChildApp = ()=> {
  // const {increment, decrement, tft} = useStore();
  const {} = useStore();

  console.log("---child render---")

  // useEffect(()=> {
  //   console.log("child: count changed", count);
  // },[count])
  
  return <div>child
{/* 
<button onClick={increment}> increment</button>
<button onClick={decrement}> decrement</button> */}
  </div>;
}