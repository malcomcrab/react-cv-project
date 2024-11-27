import DisplayForm from "./DisplayForm"


function CvDisplay({firstName, surname, educationData, jobRole}){

    

    return(
        <div id="cv-display-container">

            <div id="cv-head-container">
                <div id="names-container">
                    <p id="first-name-display" className="name-display">{firstName}</p>
                    <p id="surname-display" className="name-display">{surname}</p>
                </div>
                <div id="info-container">
                    <p id="job-display" className="info-display">{jobRole}</p>
                </div>
            </div>
            
            <div id="cv-photo-container" className="photo-container">
                <img src="" alt="Headshot of Job Applicant"/>
            </div>
            
            
            <div>
                <hr/>
            </div>
            <div className="education-container">

            {/* educationData (array of objects) is mapped and each object is passed through the DisplayForm component 
            and rendered.
            */}
        
                {educationData.map((item) => {
                   return <DisplayForm key={item} data={item} />
                })}


            </div>
        </div>
    )

}



export default CvDisplay