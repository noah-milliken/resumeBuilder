import { useState } from "react";
import Input from "./Input";

const InfoForm = () => {
  const [info, setInfo] = useState({firstName: 'Seth', lastName: 'Milliken', phone:'207-664-8936', email: 'noahmilliken@gmail.com'});
  const [schoolFormData, setSchoolFormData] = useState([{schoolName: 'Temple ', degree: 'Geography', finishDate: '12-12-2013', description: 'Honors in area of study focus on GIS'}]);

  const [professionalFormData, setProfessionalFormData] = useState([{companyName: 'Css Bakeries LLC', position: 'Baker', dateStarted: '12-12-2-2022', dateFinished: '12-12-2-2022', description: 'Cooked up some sweet sweet CSS'}])

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
    setSchoolFormData([...schoolFormData, {schoolName: '', degree: '', finishDate: '', description: ''}])
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
    <div className='project-container'>
      <div className="forms-container">
        <h2>Information</h2>
        <div className="info-container form-container">
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
        <div className="education-container form-container">
          <div className="">
          <h3>Education</h3>
            {schoolFormData.map((data, index)=> (
              <form key={index}>
                {/* School Name */}
                <label  htmlFor='schoolName'>School Name</label>
                <input type="text"   placeholder="University of React.js" name="schoolName" value={data.schoolName || ''} onChange={(e) => handleSchoolFormChange(index, e)} />
                {/* Degree Awarded */}
                <label  htmlFor='degree'>Degree</label>
                <input type="text"   placeholder="Masters in React" name="degree" value={data.degree || ''} onChange={(e) => handleSchoolFormChange(index, e)} />
                {/* Year of Graduation */}
                <label  htmlFor='date'>Year Completed</label>
                <input type="date" name="date"  value={data.finisheDate || ''}  onChange={(e) => handleSchoolFormChange(index, e)}/>
                <label  htmlFor='date'>Year Completed</label>
                <textarea type="date" name="description"  value={data.description || ''}  onChange={(e) => handleSchoolFormChange(index, e)}/>

                <div><p>delete</p><button onClick={ () => handleDeleteEducation(index)}>-</button></div>
              </form>
            ))}
          </div>
          <div><h4>Add more education:</h4><button onClick={handleAddEducation}>+</button></div>
        </div>
        
        <div className="projessional-container form-container">
          <h4>Professional experience</h4>
          {professionalFormData.map((data, index) => (

            <form key={index}>
              {/* Company Name */}
              <label htmlFor="companyName">Company Name</label>
              <input type="text" name="companyName" value={data.companyName || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)} />
            {/* Position */}
              <label htmlFor="companyName">Position</label>
              <input type="text" name="position" value={data.position || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)} />
            {/* Stare Date */}
              <label htmlFor="companyName">Start Date</label>
              <input type="date" name="companyName" value={data.dateStarted || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)}/>
            {/* End Date */}
              <label htmlFor="companyName">End Date</label>
              <input type="date" name="companyName" value={data.dateFinished || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)}/>
            {/* Description of responsibilities */}
              <label htmlFor="companyName">Description</label>
              <textarea type="text" name="companyName" placeholder="describe your responsibilities at work" value={data.description || ''} onChange={(e) => handleProfessionalFormDataChange(index, e)} />
            {/* Delete Button */}
              <div><p>delete</p><button onClick={(e) => handleDeleteProfession(index, e)}>-</button></div>
            </form>
          ))}
          <div><h4>Add more work experiences:</h4><button onClick={addProfession}>+</button></div>
        </div>
        
      </div>
      <div className="resume-container">
        <div>
          <h5>{info.firstName} | </h5>
          <h5>{info.lastName} | </h5>
          <h5>{info.phone} | </h5>
          <h5>{info.email}</h5>
        </div>
        <div>
          {schoolFormData.map((data, index) => (
            <div key={index}>
            <h4>{data.schoolName}</h4>
            <h4>{data.degree}</h4>
            <h4>{data.finishDate}</h4>
            <h4>{data.description}</h4>
            </div>
          ))}
        </div>
        <div>
        {/* {companyName: '', position: '', dateStarted: '', dateFinished: '', description: ''} */}
          {professionalFormData.map((job, index) => (
            <div key={index}>
              <h4>{job.companyName}</h4>
              <h4>{job.position}</h4>
              <h4>{job.dateStarted}</h4>
              <h4>{job.dateFinished}</h4>
              <h4>{job.description}</h4>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
