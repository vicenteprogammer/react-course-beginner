import { useState } from 'react'
import FunctionalComponent from './components/FunctionalComponent.jsx'
import './App.css'
import PropsExample from './components/PropsExample.jsx'
import Buttons from './components/Buttons.jsx'
import State from './components/UseStateComponent.jsx'
import Forms from './components/Forms.jsx'
function App() {
  

  return (
    <>
    
      <FunctionalComponent/>
      <div>Hello World</div>
      <PropsExample nome='Vicente' idade={18}/>
      <Buttons/>
      <State/>

      <Forms/>
    </>
  )
}

export default App
