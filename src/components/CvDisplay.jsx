import DisplayForm from "./DisplayForm"


function CvDisplay({firstName, surname, educationData}){

    

    return(
        <div id="cv-display-container">

            <div id="cv-names-container">
                <p id="first-name-display" className="name-display">{firstName}</p>
                <p id="surname-display" className="name-display">{surname}</p>
            </div>
            <div>
                <hr/>
            </div>
            <div className="education-container">

            {/* educationData (array of objects) is mapped and each object is passed through the DisplayForm component 
            and rendered.
            */}
            <div>
                {educationData.map((item) => {
                   return <DisplayForm key={item} data={item} />
                })}
               
            </div>

            </div>
        </div>
    )

}



export default CvDisplay