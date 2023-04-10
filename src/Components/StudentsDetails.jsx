import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addOrUpdateStudentDetails } from '../slices/studentsSlice';


const StudentsDetails = () => {

  const dispatch = useDispatch();
  const studentDetails = useSelector(state => state.studentsDetails)

  const {id} = useParams();  //to fetch the id back that we passing in url[in router file,we can see passing id in url,so it's mandatory to use id]

  const navigate = useNavigate();  //to navigate to students component,when clicking on cancel ,submit,after adding,edit

  const [currentStudentDetails,setCurrentStudentDetails] = useState({
    id : studentDetails.length + 1,
    Name : "",
    Age : "",
    Course  :"",
    Batch : ""
  });

  useEffect(() =>{
if(id){  // for updating the existing student, first checking whether the id exists,then it means we want to update existing studentDetails,so we want to fetch studentDetails through id,when id matches,we will get that studentDetails
  const currentObj = studentDetails.find(data => data.id.toString() === id.toString()); //to find through usePramas we are using data.id==id,as when id got found,we will return the whole data obj,which contains all details of students,like name,age..,that obj we storing in currentObj
  if(currentObj){
    setCurrentStudentDetails(currentObj); // setting currentObj in state
  }
}
  },[id,studentDetails])

  const changeStudentDetails = (e,key) =>{
  setCurrentStudentDetails(prevState =>{
    const newState = {...prevState};
    newState[key] = e.target.value;
    return newState;
  })
  }

  const submitHandler = () =>{

    if(id){
let index = -1; //finding its index to update
for(let i =0;i<studentDetails.length;i++){ // looping through that array
  if(id.toString() === studentDetails[i].id.toString()){ //if id matches,storing taht index in i
    index = i; //storing that index,updating new state in this index
    break;
  }
}
if(index >=0){
  const newState = JSON.parse(JSON.stringify(studentDetails)) 
  newState[index].Name = currentStudentDetails.Name; //using the index and updating the newstate with local state currentStudentDetails
    newState[index].Age = currentStudentDetails.Age;
    newState[index].Course = currentStudentDetails.Course;
    newState[index].Batch = currentStudentDetails.Batch;
  dispatch(addOrUpdateStudentDetails(newState))
}
    }else{
      const newState = JSON.parse(JSON.stringify(studentDetails)) 
      newState.push(currentStudentDetails);
      dispatch(addOrUpdateStudentDetails(newState));
    }
    navigate("/students");
  }

  return (
    <div>
        <div className='detail__container'>
          <div className='form__student__details mr-20'>
          <input type="text" id='name' name='name' className='form-control' 
          value={currentStudentDetails.Name}
          onChange={(e) => changeStudentDetails(e,"Name")}
          />
          <label className='label' htmlFor='name'>Name</label>
          </div>
          <div className='form__student__details'> 
          <input type="text" id='age' name='age'
          className='form-control input__left'
          value={currentStudentDetails.Age}
          onChange={(e) => changeStudentDetails(e,"Age")}
          />
          <label className='label label__left' htmlFor='age'>Age</label>
          </div>
          
        </div>
        <div className="detail__container">
          <div className='form__student__details mr-20'>
          <input type="text" id='course' name='course' className='form-control'
          value={currentStudentDetails.Course}
          onChange={(e) => changeStudentDetails(e,"Course")}
          />
          <label className='label' htmlFor='course'>Course</label>
          </div>
          <div className='form__student__details'>
          <input type="text" id='batch' name='batch' className='form-control input__left'
          value={currentStudentDetails.Batch}
          onChange={(e) => changeStudentDetails(e,"Batch")}
          />
          <label className='label label__left' htmlFor='batch'>Batch</label>
          </div>
       
          </div>
          <div className='form_btn_container'>
          <button className='form_btn cancel_btn_color' onClick={() => navigate("/students")}>Cancel</button>
        <button className='form_btn update__btn__color' onClick={submitHandler} >{id  ? "Update" : "Submit" }</button>
          </div>
    </div>
  )
}

export default StudentsDetails