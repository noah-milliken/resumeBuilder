import { useState } from "react";
import Input from "./Input";

const InfoForm = () => {
  const [info, setInfo] = useState({});
  const [schoolFormData, setSchoolFormData] = useState([{schoolName: 'Temple ', degree: 'Geography', finishDate: '12-12-2013'}]);

  const [professionalFormData, setProfessionalFormData] = useState([{companyName: '', position: '', dateStarted: '', dateFinished: '', description: ''}])

  const handleSchoolFormChange = (index, event) => {
    console.log(event)
    const { name, value } = event.target;
    const updatedFormData = [...schoolFormData];
    updatedFormData[index] = {...updatedFormData[index], [name]: value}
    setSchoolFormData(updatedFormData);
  };
  
  const handleProfessionalFormDataChange = (index, event) => {
    const {name, value} = event.target
    const updatedFormData = [...professionalFormData]
    updatedFormData[index] = {...updatedFormData[index], [name]: value}
    setProfessionalFormData(updatedFormData)
  }
  const  handleAddEducation = () => {
    setSchoolFormData([...schoolFormData, {schoolName: '', degree: '', finishDate: ''}])
  }
  const addProfession = () => {
    setProfessionalFormData([...professionalFormData, {companyName: '', position: '', dateStarted: '', dateFinished: '', description: ''}])
  }

  // DELETE EDUCATION FUNCTION
  const handleDeleteEducation = (index) => {
    setSchoolFormData(prevSchoolData => prevSchoolData.filter((data, i)=> i != index))
  }
   const handleDeleteProfession = (index) => {
    setProfessionalFormData(prevProfessionalData => prevProfessionalData.filter((data, i)=> i != index))
   }

  function handleInfoChange(e) {
    const name = e.target.name;
    setInfo({ ...info, [name]: e.target.value });
  }

  return (
    <div>
      <div>
        <div>
          <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={handleInfoChange}
          />
          <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={handleInfoChange}
          />
          <Input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            onChange={handleInfoChange}
          />
          <Input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleInfoChange}
          />
        </div>
        <div>
          <h1>Education</h1>
          {schoolFormData.map((data, index)=> (
            <div key={index}>
              <label  htmlFor='schoolName'>School Name</label>
              <input type="text"   placeholder="University of React.js" name="schoolName" value={data.schoolName || ''} onChange={(e) => handleSchoolFormChange(index, e)} />
              <label  htmlFor='degree'>Degree</label>
              <input type="text"   placeholder="Masters in React" name="degree" value={data.degree || ''} onChange={(e) => handleSchoolFormChange(index, e)} />
              <label  htmlFor='date'>Year Completed</label>
              <input type="date" name="date"  value={data.finisheDate || 'date'}  onChange={(e) => handleSchoolFormChange(index, e)}/>
              <div>delete<button onClick={ () => handleDeleteEducation(index)}>-</button></div>
            </div>
          ))}
        </div>
        <div><h3>Add more education:</h3><button onClick={handleAddEducation}>+</button></div>

        {/* {companyName: '', position: '', dateStarted: '', dateFinished: ''} */}
        <div>
          <h2>Professional experience</h2>
          {professionalFormData.map((data, index) => (
            <div key={index}>
              <label htmlFor="companyName">Company Name</label>
              <input type="text" name="companyName" value={data.companyName || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)} />

              <label htmlFor="companyName">Position</label>
              <input type="text" name="position" value={data.position || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)} />
              
    

              <label htmlFor="companyName">Start Date</label>
              <input type="date" name="companyName" value={data.dateStarted || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)}/>

              <label htmlFor="companyName">End Date</label>
              <input type="date" name="companyName" value={data.dateFinished || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)}/>

              <label htmlFor="companyName">Description</label>
              <textarea type="text" name="companyName" placeholder="describe your responsibilities at work" value={data.description || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)} />
              
              <div>delete<button onClick={(e) => handleDeleteProfession(index, e)}>-</button></div>
            </div>
          ))}
        </div>
        <div><h3>Add more work experiences:</h3><button onClick={addProfession}>+</button></div>
      </div>
      <div>
        <div>
          <h3>{info.firstName}</h3>
          <h3>{info.lastName}</h3>
          <h3>{info.phone}</h3>
          <h3>{info.email}</h3>
        </div>
        <div>
          {schoolFormData.map((data, index) => (
            <div key={index}>
            <div>{data.schoolName}</div>
            <div>{data.degree}</div>
            <div>{data.finishDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
