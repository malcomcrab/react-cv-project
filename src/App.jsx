import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import InputDisplay from './components/InputDisplay'
import EducationDisplay from './components/EducationDisplay'

const userInfo = [{
  id: 'first-name',
  name: 'First Name', 
  type: 'text'
  },
  {
  id: 'surname',
  name: 'Surname', 
  type: 'text'
  },
  {
  id: 'phone',
  name: 'Phone', 
  type: 'number'
  },
  {
  id: 'email',
  name: 'Email Address', 
  type: 'email'
  }

]

const userEducation = [{
  id: 'school-name',
  name: 'School Name',
  type: 'text'
  },
  {
  id: 'school-start-date',
  name: 'Start Date', 
  type: 'date'
  },
  {
  id: 'school-finished-date',
  name: 'End Date', 
  type: 'date'
  },
  {
  id: 'grades',
  name: 'Grades', 
  type: 'text-area'
  }

]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div id='user-info-container' className='form-section'>{userInfo.map(item =>[
       <InputDisplay key={item.id} id={item.id} value={item.name} type={item.type} class={'user-details'}/>
    ])}</div>
    <div id='user-school-container' className='form-section'>{userEducation.map(item =>[
       <InputDisplay key={item.id} id={item.id} value={item.name} type={item.type} class={'user-details'}/>
    ])}</div>
    <EducationDisplay />
    <Footer />
    </>
  )
}

export default App
