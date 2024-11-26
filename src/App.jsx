import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GeneralDisplay from './components/GeneralDisplay'
import GeneralInfo from './components/GeneralInfo'
import CvDisplay from './components/CvDisplay'
import EducationForm from './components/EducationForm'
import Button from './components/Button'

function App() {

  const [firstName, setFirstName] = useState('John')
  const [surname, setSurname] = useState('Bon')
  const handleChangeName = (event) => { setFirstName(event.target.value) }
  const handleChangeSurname = (event) => { setSurname(event.target.value) }

  return (
    <>
      <Header />

      <main id={'main-content'} className={'container'}>
        <div id={'left-column'}>

          <h2>Personal Details</h2>
          <Button value={'+'}/>

          <GeneralInfo
            name={firstName}
            handleChangeName={handleChangeName}
            surname={surname}
            handleChangeSurname={handleChangeSurname} />
          
          <h2>Education Form</h2>
          <Button value={'+'}/>
          <EducationForm />
        </div>


        <div id={'right-column'}>

          <CvDisplay
            firstName={firstName}
            surname={surname}
          />

          <GeneralDisplay
            firstName={firstName}
            surname={surname}
          />
        </div>
      </main>
      

      {/* 
    <div id='user-info-container' className='form-section'>{userInfo.map(item =>[
       <InputDisplay key={item.id} id={item.id} value={item.name} type={item.type} class={'user-details'}/>
    ])}</div>
    <h2>Education.</h2>
    <div id='user-school-container' className='form-section'>
        {userEducation.map(item =>[<InputDisplay key={item.id} id={item.id} value={item.name} type={item.type} class={'user-details'}/>
    ])}
    </div>
    <Button value={'Add Another Education Section'}/>
    <h2>Experience.</h2>
    <div className='form-section'>
      
    </div>*/}


      <Footer />
    </>
  )
}

export default App
