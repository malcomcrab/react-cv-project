

function DisplayForm({data}){
    console.log(data)
  
 
        return(
            <ul>
                <p>{data.schoolName}</p>
                <p>{data.educationType}</p>
                <p>{data.educationStart}</p>
                <p>{data.educationEnd}</p>
                <p>{data.grade}</p>
                <p>{data.educationNotes}</p>
            </ul>
            
        )
    

}

export default DisplayForm;