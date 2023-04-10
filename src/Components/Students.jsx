import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Students = () => {
    const studentDetails = useSelector(state => state.studentsDetails);
  return (
    <div>
        <div className='student_header'>
        <span style={{fontSize:'40px'}}>Students Details</span>
        <button className='btn'><NavLink to={"/StudentsDetails"} style={{textDecoration : 'none',color:'black',width:'20px',height:'30px',fontSize:'20px',fontWeight:'bold'}} >Add new Student</NavLink></button>
        </div>
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
            {studentDetails?.map(data => {  
                return <tr key={data.id}>
                <th>{data.Name}</th>
                <th>{data.Age}</th>
                <th>{data.Course}</th>
                <th>{data.Batch}</th>
                <th><Link to={`/studentsDetails/${data.id}`}>Edit</Link></th>  
            </tr>
            })}
            </tbody>
        </table>
        </div>
  )
}
export default Students