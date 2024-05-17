import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'
import PuzzleMaker from './PuzzleMaker'
import Info from './Info'

//confitional rendering = allows control of what is rendered based on conditions

function App() {
  const [count, setCount] = useState(0)
  const puzzlemaker=PuzzleMaker()
  const puzzleArray=puzzlemaker[0]
  const words=puzzlemaker[1]
  return (
    <>
      <Info words={words}></Info>
      <Table array = {puzzleArray}/>
    </>
  )
}

export default App  
