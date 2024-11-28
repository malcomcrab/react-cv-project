import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GeneralDisplay from './components/GeneralDisplay'
import GeneralInfo from './components/GeneralInfo'
import CvDisplay from './components/CvDisplay'
import EducationForm from './components/EducationForm'
import Button from './components/Button'
import EducationList from './components/EducationList'
import EducationEditor from './components/EducationEditor'

function App() {

  const [firstName, setFirstName] = useState('John')
  const [surname, setSurname] = useState('Bon')
  const [jobRole, setJobRole] = useState('Developer')
  const [educationData, setEducationData] = useState([])
  const [editData, setEditData] = useState([])


  const handleToggle = (event) => {
    let toggle = document.getElementById(event.target.value)
    if(toggle.className === 'hidden-form'){
      toggle.className = 'unhidden-form'
    } else {
      toggle.className = 'hidden-form'
    }
  }
  
  
  //When the name inputs are changed state is updates which rerenders the name display
  const handleChangeName = (event) => { setFirstName(event.target.value) }
  const handleChangeSurname = (event) => { setSurname(event.target.value) }
  const handleChangeJobRole = (event) => { setJobRole(event.target.value) }
  const handleDeleteData = (event) => { setEducationData(previousEducationData => previousEducationData.filter((data) => data.id != event.target.value))}
  const handleEditData = () => {setEditData(educationData)} 


  //Turns form inputs into an object and saves to state
  const formSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    event.target.reset()
    let formObject = Object.fromEntries(data.entries())
    formObject.id = crypto.randomUUID() 
    setEducationData([...educationData, formObject])
   //console.log(formObject)
    //console.log(educationData[0])
}
  return (
    <>
      <main id={'main-content'} className={'container'}>

        <div id={'left-column'}>

          <Header />        

          <div className="form-titles-container">

          <h2>Personal Details</h2>
          {/*button to open general info form */}
          <Button text={'+'} value={'general-info-form'} handleClick={handleToggle}/>
          
          <EducationList educationData={educationData} handleEditData={handleEditData} handleDeleteData={handleDeleteData}/>
          <h2>Add Education</h2>
          {/*button to open Education form*/}
          <Button text={'+'} value={'education-form'} handleClick={handleToggle}/>
          


          <h2>Add Skills</h2>
          {/*button to open Education form*/}
          <Button text={'+'} value={'education-form'} handleClick={handleToggle}/>
         
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
          </div>
          
          <EducationForm formSubmit={formSubmit} />
          <EducationEditor data={editData}/>
        </div>


        <div id={'right-column'}>

          <CvDisplay
            firstName={firstName}
            surname={surname}
            jobRole={jobRole}
            educationData={educationData}
            handleDeleteData={handleDeleteData}
          />

          
        </div>
      </main>
   
      <Footer />
    </>
  )
}

export default App
