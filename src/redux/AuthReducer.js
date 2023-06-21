import { createSlice } from '@reduxjs/toolkit';
import { authStorage } from '../pages/Auth/AuthStorage';


const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated:authStorage.getToken() ? true :false ,
    token: authStorage.getToken(),
    user:authStorage.getUser(),
    Phone: '',
    About_the_company: '',
    Location1: "",
    email:""

  },
  reducers: {
    setEmail :(state , action)=>{
      state.email = action.payload
    },
    setPhone :(state , action)=>{
      state.Phone = action.payload
    },
    SetAboutthecompany :(state , action)=>{
      state.About_the_company = action.payload
    },
    setLocation1 :(state , action)=>{
      state.Location1 = action.payload
    },
    logout :(state) =>{
        
        authStorage.remove();
        state.user =null 
        state.token =null
        state.isAuthenticated = false
    },
    register :(state , action) =>{
      state.user = action.payload
      
      authStorage.storeUser(action.payload)
      
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

export const {logout , login  ,register , verify, setPhone ,setLocation1 , SetAboutthecompany,setEmail} = AuthSlice.actions;
export default AuthSlice.reducer;