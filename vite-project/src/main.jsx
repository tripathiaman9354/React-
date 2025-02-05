import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank'
//   },
//    children: 'Click me to visit google'
// }


const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser="React with Aman!"

const ReactElement=React.createElement(
  'a',
  {href:'https://youtube.com' , target:"_blank"},
  'Click Here to visit Youtube',
  anotherUser 
)

createRoot(document.getElementById('root')).render(
  
    // <App/>
    // MyApp()
    // <MyApp />
    ReactElement
    // anotherElement]
)
  