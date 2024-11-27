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
  const [jobRole, setJobRole] = useState('Developer')
  const [educationData, setEducationData] = useState([])

  const handleToggle = (event) => {
    let toggle = document.getElementById(event.target.value)
    if(toggle.style.display === 'grid'){
         toggle.style.display = 'none'
    } else {
       toggle.style.display = 'grid'
    }
   

  }
  
  
  //When the name inputs are changed state is updates which rerenders the name display
  const handleChangeName = (event) => { setFirstName(event.target.value) }
  const handleChangeSurname = (event) => { setSurname(event.target.value) }
  const handleChangeJobRole = (event) => { setJobRole(event.target.value) }

  //Turns form inputs into an object and saves to state
  const formSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    event.target.reset()
    let formObject = Object.fromEntries(data.entries())
    setEducationData([...educationData, formObject])
   //console.log(formObject)
    //console.log(educationData[0])
}
  return (
    <>
      <Header />


      <main id={'main-content'} className={'container'}>

        <div id={'left-column'}>
          <div className="form-title-container">
            <h2>Personal Details</h2>
            {/*button to open general info form */}
            <Button text={'+'} value={'general-info-form'} handleClick={handleToggle}/>
          </div>
          

          <GeneralInfo
            name={firstName}
            handleChangeName={handleChangeName}
            surname={surname}
            handleChangeSurname={handleChangeSurname} 
            jobRole={jobRole}
            handleChangeJobRole={handleChangeJobRole}
            />
          <div className="form-title-container">
            <h2>Education Form</h2>
            {/*button to open Education form*/}
          <Button text={'+'} value={'education-form'} handleClick={handleToggle}/>
          </div>
          
          <EducationForm formSubmit={formSubmit} />

        </div>


        <div id={'right-column'}>

          <CvDisplay
            firstName={firstName}
            surname={surname}
            jobRole={jobRole}
            educationData={educationData}
          />

          <GeneralDisplay
            firstName={firstName}
            surname={surname}
            jobRole={jobRole}
          />
        </div>
      </main>
   
      <Footer />
    </>
  )
}

export default App
