import React, { useEffect } from 'react'
import AppRouter from './Routes'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-tooltip/dist/react-tooltip.css'
import { useGetCategory } from './api/category';
import Loader from './components/Utils/Loader';
import { useDispatch } from 'react-redux';
import { getAllNformation } from './redux/CategoryReducer';

const App = () => {
  const dispatch = useDispatch()
  const {data , isLoading , isSuccess} = useGetCategory();
  
  useEffect(()=>{
    if(isSuccess){
      
      dispatch(getAllNformation(data))
    }

  },[isSuccess , dispatch])

  if(isLoading){
    return <Loader/>
  }
  return (
    <AppRouter />
    )
}

export default App