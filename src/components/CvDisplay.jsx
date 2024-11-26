
function CvDisplay({firstName, surname}){

    return(
        <div id="cv-display-container">

            <div id="cv-names-container">
                <p id="first-name-display" className="name-display">{firstName}</p>
                <p id="surname-display" className="name-display">{surname}</p>
            </div>
            <div>
                <hr/>
            </div>
            
        </div>
    )

}

export default CvDisplay