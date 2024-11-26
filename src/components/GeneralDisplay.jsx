
function GeneralDisplay({firstName, surname}){

    return(
       <div>
         <h1 defaultValue={firstName}>{firstName}</h1>
         <h1 >{surname}</h1>
       </div>
    )

}

export default GeneralDisplay;