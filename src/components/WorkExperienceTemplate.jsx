function WorkExperienceTemplate({ data }) {
  return (
    <>
      <h4>{data.experienceName}</h4>
      <p>{data.experienceRole}</p>
      <p>{data.experienceStart}</p>
      <p>{data.experienceEnd}</p>
      <p>{data.responsibilities}</p>
      <p>{data.experienceNotes}</p>
    </>
  );
}

export default WorkExperienceTemplate;
