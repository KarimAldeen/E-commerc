import { createSlice } from '@reduxjs/toolkit';
import { authStorage } from '../pages/Auth/AuthStorage';


const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated:authStorage.getToken() ? true :false ,
    token: authStorage.getToken(),
    user:authStorage.getUser()
  },
  reducers: {
    
    logout :(state) =>{
        
        authStorage.remove();
        state.user =null 
        state.token =null
        state.isAuthenticated = false
    },
    register :(state , action) =>{
      state.user = action.payload?.data
      authStorage.storeUser(action.payload?.data)
      state.isAuthenticated = true
    },

    login :(state , action) =>{
      // console.log(action?.payload);
      state.user = action.payload?.user
      authStorage.storeUser(action.payload?.user)

      state.token = action.payload?.token
      authStorage.storeToken(action.payload?.token)
      state.isAuthenticated = true
    },
    verify:(state , action) =>{
      state.token = action.payload
      authStorage.storeToken(action.payload) ;
      state.isAuthenticated = true  
    }
  },
  
});

export const {logout , login  ,register , verify} = AuthSlice.actions;
export default AuthSlice.reducer;