import { configureStore } from '@reduxjs/toolkit'
import studentsSlice from '../slices/studentsSlice'


const store = configureStore({
  reducer: {
    studentsDetails : studentsSlice
  },
})

export default store