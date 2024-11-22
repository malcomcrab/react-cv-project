import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserInput from './components/UserInput'
import InputDisplay from './components/InputDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <UserInput />
    <InputDisplay value={'Input Data'}/>
    <Footer />
    </>
  )
}

export default App
