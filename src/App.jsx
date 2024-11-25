import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import InputDisplay from './components/InputDisplay'

const list = [{
  id: 'firstName',
  name: 'First Name', 
  type: 'text'
  },
  {
  id: 'surname',
  name: 'Surname', 
  type: 'text'
  },
  {
  id: 'PhoneNumber',
  name: 'Phone', 
  type: 'number'
  },
  {
  id: 'Email',
  name: 'Email Address', 
  type: 'email'
  }

]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div>{list.map(item =>[
       <InputDisplay key={item.id} value={item.name} type={item.type} class={'user-details'}/>
    ])}</div>
    
    <Footer />
    </>
  )
}

export default App
