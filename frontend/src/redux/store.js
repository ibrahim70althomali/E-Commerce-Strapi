// بنخزن تفاصيل هنا 
// Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:
import { configureStore } from '@reduxjs/toolkit'
import catReducer from './catReducer'
export const store = configureStore({
  reducer: {cart:catReducer},
})