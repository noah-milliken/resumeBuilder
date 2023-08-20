
import {useState} from "react";
import { InfoForm } from "./InfoForm";
import EducationForm from './EducationForm'
import ProfessionForm from "./ProfessionForm";


function App() {
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
  const handleAddProfession = () => {
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
    console.log('clicked')
    const name = e.target.name;
    setInfo({ ...info, [name]: e.target.value });
  }

  return (
    <div className='project-container'>
      <div className="forms-container">
        <h2>Information</h2>
        < InfoForm 
          data={info}
          onChange={handleInfoChange}
        />
        < EducationForm 
          data={schoolFormData}
          onChange={handleSchoolFormChange}
          onDelete={handleDeleteEducation}
          onAdd={handleAddEducation}
        />
        <ProfessionForm 
        data={professionalFormData}
        onChange={handleProfessionalFormDataChange}
        onDelete={handleDeleteProfession}
        onAdd={handleAddProfession}
        />
        
        
        
      </div>
      <div className="resume-container">
        <div>
          {info.firstName && <h5>{info.firstName}  </h5>}
          {info.lastName && <h5> | {info.lastName}</h5>} 
         {info.phone && <h5> | {info.phone}  </h5>}
          {info.email && <h5>| {info.email}</h5>}
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
}


export default App
