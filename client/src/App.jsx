import {useReducer, createContext, useEffect } from 'react';
import './App.css';
import  { Footer, Header }  from './components';
import { Outlet } from 'react-router-dom';
import { initialState, reducer } from './reducer/useReducer.js';
import axiosInstance from './utils/axiosInstance.js';

export const UserContext = createContext(); 

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUser = async() => {
    
    const resData = await axiosInstance.get('/user/api/current-user');
    // console.log(typeof resData.status)
    if(resData.status === 201 ){
      const data = {userSession:true, username:resData.data.user.username, fullName:resData.data.user.fullName}
      dispatch({type:"USER", payload:data})
    }
  }

  useEffect(() => {
      getUser()
  },[])

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header/>
          <Outlet/>
        <Footer/> 
      </UserContext.Provider>
    </>
  )
}

export default App
