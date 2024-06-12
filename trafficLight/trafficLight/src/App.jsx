import { useState } from 'react'
import TrafficLight from './TrafficLight'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficLight></TrafficLight>
    </>
  )
}

export default App
