import { createSlice } from "@reduxjs/toolkit"

 const initialStudentState = [{
    id : 1,
    Name: "John",
    Age : 26,
    Course : "MERN",
    Batch : "October"
  },{
    id : 2,
    Name: "Doe",
    Age : 25,
    Course : "MERN",
    Batch : "November"
  },
  {
    id : 3,
    Name: "Biden",
    Age : 25,
    Course : "MERN",
    Batch : "September"
  },
  {
    id : 4,
    Name: "Barar",
    Age : 22,
    Course : "MERN",
    Batch : "September"
  },
  {
    id : 5,
    Name: "Christ",
    Age : 23,
    Course : "MERN",
    Batch : "October"
  },
  {
    id : 6,
    Name: "Elent",
    Age : 24,
    Course : "MERN",
    Batch : "November"
  }]

const studentsSlice = createSlice({
    name: 'studentsDetails',
    initialState : initialStudentState,
    reducers: {
     addOrUpdateStudentDetails(state,action){
        return action.payload
     }
    },
  })

export const {addOrUpdateStudentDetails} = studentsSlice.actions;
  
  export  default studentsSlice.reducer;