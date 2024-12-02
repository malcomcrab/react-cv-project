
const skills = ['Hat', 'Jumping', 'Tan']

function SkillsDisplayTemplate({ data }){

    return(
        
        <>
           {skills.map((item) => {
            return (
            <p key={item} text={item}>{item}</p>
            )
           })}
        </>
    
    )



}


export default SkillsDisplayTemplate