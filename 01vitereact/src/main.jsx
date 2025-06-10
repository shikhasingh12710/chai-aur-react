// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Reat from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement={
//     type:'a', 
//     props:{
//         href:'https://goggle.com',
//         target:'_blank'
//     },
//     childern:'Click me to visit google'
// }
const anotherElement=(
    <a href="https://google.com" target='_blank'>
        Visit google
    </a>
)
const anotherUser="chai aur react"
const reactElement=React.createElement(
    'a',
    {href:'https://goggle.com',target:'_blank'},
    'click me to visit google',
    anotherElement
)
function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
