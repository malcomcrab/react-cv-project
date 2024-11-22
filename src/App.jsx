import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <InputDisplay value={'hey'}/>
    <Footer />
    </>
  )
}

export default App
