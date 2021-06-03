import React, { Dispatch } from 'react';
import './style.css'
import styled from 'styled-components'
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './redux/counter.reducer'
import { updateColor, updateCustomText, updateTextSize } from './redux/theme.reducer'
import { useAppDispatch, useAppSelector } from './hooks';


// function App() {
//   const count = useAppSelector((state) => state.counter.value)
//   const dispatch = useAppDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }


/* ------------------------------- new section ------------------------------ */


function App() {

  return (
    <>
      <MyButton></MyButton>
      <MyText></MyText>
      <MyOptions></MyOptions>
      <MyCustomComponent />
      <MyInput></MyInput>
    </>
  );
}


export default App;


function MyInput() {
  console.log("render custom input");

  const customText = useAppSelector((state) => state.theme.customText)
  const dispatch = useAppDispatch()

  return <input type="text" value={customText}
    onChange={(e) => {
      dispatch(updateCustomText(e.target.value))
    }}
  ></input>
}


function MyCustomComponent() {
  const customText = useAppSelector((state) => state.theme.customText)

  console.log("render custom component");
  return (<p>Custom-text: {customText}</p>)
}


function MyOptions() {
  const dispatch = useAppDispatch()

  console.log("render options");

  const selectOptions = ['xs', 'sm', 'base', 'lg']


  return <select id="textSize" name="textSize"
    onChange={(e) => {
      dispatch(updateTextSize(e.target.value))
    }}
  >
    {selectOptions.map((option) => (
      <option value={option} key={option}>{option}</option>
    ))}
  </select>
}



function MyText() {
  const textSize = useAppSelector((state) => state.theme.textSize)

  console.log("render text");

  const textSizeClass = classNames({
    'text-xs': textSize === 'xs',
    'text-sm': textSize === 'sm',
    'text-base': textSize === 'base',
    'text-lg': textSize === 'lg',
    'text-xl': textSize === 'xl',
    'text-2xl': textSize === '2xl',
  })

  return (<>
    <p className={textSizeClass}>This is my text</p>
  </>)

}



function MyButton() {
  console.log("render button");
  const color = useAppSelector((state) => state.theme.color)
  const dispatch = useAppDispatch()


  const buttonColor = classNames({
    'bg-green-500 hover:bg-green-700': color === 'green',
    'bg-blue-500 hover:bg-blue-700': color === 'blue',
  })

  return <button className={`${buttonColor} py-2 px-4 font-semibold rounded-lg shadow-md text-white`}
    onClick={() => {
      dispatch(updateColor())
    }}

  >Haha</button>
}


