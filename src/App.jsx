import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import InputDisplay from './components/InputDisplay'

const list = [{
  name: 'Pony', 
  type: 'text'
  },
  {
    name:'Tony',
    type: 'number'
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div>{list.map(item =>[
       <InputDisplay key={item.name} value={item.name} type={item.type}/>
    ])}</div>
    <InputDisplay value={'Input Data'}/>
    <Footer />
    </>
  )
}

export default App
