/* eslint-disable react/prop-types */


const ProfessionForm = ({data, onAdd, onChange, onDelete}) => {
  return (
    <div className="projessional-container form-container">
          <h4>Professional experience</h4>
          {data.map((job, index) => (
            <form key={index}>
              {/* Company Name */}
              <label htmlFor="companyName">Company Name</label>
              <input type="text" name="companyName" value={job.companyName || ''} onChange={(e) => onChange(index, e)} />
            {/* Position */}
              <label htmlFor="companyName">Position</label>
              <input type="text" name="position" value={job.position || ''} onChange={(e) => onChange(index, e)} />
            {/* Stare Date */}
              <label htmlFor="companyName">Start Date</label>
              <input type="date" name="companyName" value={job.dateStarted || ''} onChange={(e) => onChange(index, e)}/>
            {/* End Date */}
              <label htmlFor="companyName">End Date</label>
              <input type="date" name="companyName" value={job.dateFinished || ''} onChange={(e) => onChange(index, e)}/>
            {/* Description of responsibilities */}
              <label htmlFor="companyName">Description</label>
              <textarea type="text" name="companyName" placeholder="describe your responsibilities at work" value={job.description || ''} onChange={(e) => onChange(index, e)} />
            {/* Delete Button */}
              <div><p>delete</p><button onClick={(e) => onDelete(index, e)}>-</button></div>
            </form>
          ))}
          <div><h4>Add more work experiences:</h4><button onClick={onAdd}>+</button></div>
        </div>
  )
}

export default ProfessionForm