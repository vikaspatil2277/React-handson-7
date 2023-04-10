import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Students from './Students'
import Contact from './Contact'
import StudentsDetails from './StudentsDetails'


const RouterFile = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students
        />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/studentsDetails' element={<StudentsDetails 
        />}/>
        <Route path='/studentsDetails/:id' element={<StudentsDetails  
        />}/>
    </Routes>
  )
}

export default RouterFile