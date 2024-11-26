
function CvDisplay({firstName, surname}){

    return(
        <div className="cv-display-container">
            
            <div className="cv-names-container">
                <p id="first-name-display" className="name-display">{firstName}</p>
                <p id="surname-display" className="name-display">{surname}</p>
            </div>

        </div>
    )

}

export default CvDisplay