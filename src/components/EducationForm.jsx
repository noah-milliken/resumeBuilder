/* eslint-disable react/prop-types */


export const EducationForm = ({ data, onChange, onDelete, onAdd}) => {
  return (
    <div>
    <div className="education-container form-container">
    <div className="">
    <h3>Education</h3>
      {data.map((school, index)=> (
        <form key={index}>
          {/* School Name */}
          <label  htmlFor='schoolName'>School Name</label>
          <input type="text"   placeholder="University of React.js" 
          name="schoolName" value={school.schoolName || ''} onChange={(e)=> onChange(index, e)} />
          {/* Degree Awarded */}
          <label  htmlFor='degree'>Degree
          <input type="text"   placeholder="Masters in React" name="degree" value={school.degree || ''} onChange={(e)=> onChange(index, e)} />
          </label>
          {/* Year of Graduation */}
          <label  htmlFor='date'>Year Completed:
          <input type="date" name="date"  value={school.finisheDate || ''}  onChange={(e)=> onChange(index, e)}/>
          </label>
          <label  htmlFor='description'>Description:
          <textarea type="date" name="description"  value={school.description || ''}  onChange={(e)=> onChange(index, e)}/>
          </label> 
          <div><p>delete</p><button onClick={()=>onDelete(index)}>-</button></div>
        </form>
      ))}
    </div>
    <div><h4>Add more education:</h4><button onClick={onAdd}>+</button>
    </div>
  </div>
  </div>
  )
}
export default EducationForm