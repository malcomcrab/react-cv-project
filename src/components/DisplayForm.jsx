import Button from "./Button";


function DisplayForm({data, handleDeleteData}){
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
                <Button text={'Delete'}  value={data.id} handleClick={handleDeleteData}/>
            </div>
           
            
        )
    

}

export default DisplayForm;