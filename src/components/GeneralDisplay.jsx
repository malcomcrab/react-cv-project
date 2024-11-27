
{/*Renders the data from the general info form.
  State is shared from parent component so that the text
  updates automatically onChange of the form inputs*/}

function GeneralDisplay({firstName, surname}){

    return(
       <div>
         <h1 defaultValue={firstName}>{firstName}</h1>
         <h1 >{surname}</h1>
         
       </div>
    )

}

export default GeneralDisplay;