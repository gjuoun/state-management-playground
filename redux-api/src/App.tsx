import React from 'react';
import './style.css'
import styled from 'styled-components'
import classNames from 'classnames';

interface Theme {
  color: string,
  textSize: string
}


interface ContextIntf {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
  customText: string,
}

const MyContext = React.createContext<ContextIntf>({
  theme: {
    color: 'blue',
    textSize: 'sm'
  },
  setTheme: () => { },
  customText: 'my text'
})


function App() {

  const [theme, setTheme] = React.useState<Theme>({
    color: 'blue',
    textSize: 'lg'
  })
  return (
    <MyContext.Provider value={{ theme, setTheme, customText: "my text" }}>
      <MyButton></MyButton>
      <MyText></MyText>
      <MyOptions></MyOptions>
      <MyCustomComponent />
    </MyContext.Provider>
  );
}


export default App;


function MyCustomComponent() {
  const { customText } = React.useContext(MyContext)

  console.log("render custom component");


  return (<p>{customText}</p>)
}


function MyOptions() {
  console.log("render options");


  const { setTheme } = React.useContext(MyContext)

  const selectOptions = ['xs', 'sm', 'base', 'lg']


  return <select id="textSize" name="textSize"
    onChange={(e) => {
      setTheme((theme) => ({ ...theme, textSize: e.target.value }))
    }}
  >
    {selectOptions.map((option) => (
      <option value={option} key={option}>{option}</option>
    ))}
  </select>
}



function MyText() {

  console.log("render text");

  const { theme: { textSize }, setTheme } = React.useContext(MyContext)

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

  const { theme: { color }, setTheme } = React.useContext(MyContext)

  const buttonColor = classNames({
    'bg-green-500 hover:bg-green-700': color === 'green',
    'bg-blue-500 hover:bg-blue-700': color === 'blue',
  })

  return <button className={`${buttonColor} py-2 px-4 font-semibold rounded-lg shadow-md text-white`}
    onClick={() => {
      setTheme((theme) => {
        if (theme.color === 'blue')
          return { ...theme, color: 'green' }
        else
          return { ...theme, color: 'blue' }
      })
    }}

  >Haha</button>
}


