import Button from "./Button";


function DisplayForm({data}){
    console.log(data)
  
 
        return(
            
            <div>
                
                <ul className="educationList">
                    <p>{data.schoolName}</p>
                    <p>{data.educationType}</p>
                    <p>{data.educationStart}</p>
                    <p>{data.educationEnd}</p>
                    <p>{data.grade}</p>
                    <p>{data.educationNotes}</p>
                </ul>
                <Button value={'edit'}/>
            </div>
           
            
        )
    

}

export default DisplayForm;