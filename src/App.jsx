import { useState } from 'react'
import FunctionalComponent from './components/FunctionalComponent.jsx'
import './App.css'
import PropsExample from './components/PropsExample.jsx'
import Buttons from './components/Buttons.jsx'

function App() {
  

  return (
    <>
    
       <FunctionalComponent/>
      <div>Hello World</div>
      <PropsExample nome='Vicente' idade={18}/>
      <Buttons/>
    </>
  )
}

export default App
