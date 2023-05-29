import { createSlice } from '@reduxjs/toolkit';



const CategorySlice = createSlice({
  name: 'category',
  initialState: {
   category :[],
   subCategory:[],
   subSubCategory:[]
  },
  reducers: {
    getAllNformation:(state, actions) =>{
       let data =actions.payload;

       state.category = data?.category 
       state.subCategory = data?.subcategory
       state.subSubCategory = data?.subsubcategory
    }
    
  },
  
});

export const {getAllNformation} = CategorySlice.actions;
export default CategorySlice.reducer;