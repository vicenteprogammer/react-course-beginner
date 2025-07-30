import { useState } from 'react'
import FunctionalComponent from './components/FunctionalComponent.jsx'
import './App.css'
import PropsExample from './components/PropsExample.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <FunctionalComponent/>
      <div>Hello World</div>
      <PropsExample nome='Vicente' idade={18}/>
    </>
  )
}

export default App
