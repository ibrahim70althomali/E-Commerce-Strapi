// هنا راح نضيفونحذف المنتجات
// راح ننزل مكتبه Redux Toolkit
// npm install @reduxjs/toolkit
// npm install react-redux
// Create a Redux State Slice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // 
  Products:[],
}

export const counterSlice = createSlice({
    // 
  name: 'cart',
  initialState,
  reducers: {
    // 
    addToCart: (state,action) => {
    //  راح نضيف شرط عشان لما يضيف نفس المنتج مايطعيه انه منتج جديد 
    
    const item = state.Products.find(item=> item.id === action.payload.id )

    if (item) {
        item.quantity += action.payload.quantity ;
    }else{
        state.Products.push(action.payload);
    }

},
// 
    removeItem: (state,action) => {
       state.Products= state.Products.filter(item=>item.id !== action.payload)
    },
      resetCart: (state) => {
      state.Products=[]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = counterSlice.actions

export default counterSlice.reducer
