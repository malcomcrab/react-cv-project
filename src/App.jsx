import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import InputDisplay from './components/InputDisplay'
import EducationDisplay from './components/ExperienceDisplay'
import Button from './components/Button'

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
  id: 'education-name',
  name: 'Name of the School/College/Uni',
  type: 'text',
  format: 'input'
  },
  {
  id: 'education-course',
  name: 'Course Taken...',
  type: 'text',
  format: 'textarea'
  },
  {
  id: 'school-start-date',
  name: 'Start Date', 
  type: 'date',
  format: 'input'
  },
  {
  id: 'school-finished-date',
  name: 'End Date', 
  type: 'date',
  format: 'input'
  },
  {
  id: 'grades',
  name: 'Grades', 
  type: 'text-area',
  format: 'textarea',
  }]

  const userExperience = [{
    id: 'experience-name',
    name: 'Name of Employer/Relevant Experience',
    type: 'text',
    format: 'input'
    },
    {
    id: 'experience-role',
    name: 'Role of Experiance',
    type: 'text-box',
    format: 'input'
    },
    {
    id: 'experience-start-date',
    name: 'Start Date', 
    type: 'date',
    format: 'input'
    },
    {
    id: 'experience-end-date',
    name: 'End Date', 
    type: 'date',
    format: 'input'
    },
    {
    id: 'responsibilities',
    name: 'Role Responsibilities/Experience', 
    type: 'text',
    format: 'text-area'
    }]

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
    ])}
    </div>
    <Button value={'Add Another Education Section'}/>
    <Footer />
    </>
  )
}

export default App
