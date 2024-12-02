function DisplayForm({ data }) {
  return (
    <div>
      <ul className="educationList">
        <h2>{data.schoolName}</h2>
        <p>{data.educationType}</p>
        <p>{data.educationStart}</p>
        <p>{data.educationEnd}</p>
        <p>{data.grade}</p>
        <p>{data.educationNotes}</p>
      </ul>
    </div>
  );
}

export default DisplayForm;
