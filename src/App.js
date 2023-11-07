import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './Component/RootLayOut'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth_pages/Login';
import SignUp from './pages/auth_pages/SignUp';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >

          <Route path='user/login' element={<Login />} />
          <Route path='user/signUp' element={<SignUp />} />



        </Route>

      </Routes>
      <ToastContainer autoClose={1000} />
    </>

  )
}

export default App
