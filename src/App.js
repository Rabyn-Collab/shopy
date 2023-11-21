import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './Component/RootLayOut'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth_pages/Login';
import SignUp from './pages/auth_pages/SignUp';
import HomePage from './pages/HomePage';
import UserRoutes from './Component/UserRoutes';
import ProductList from './pages/admin_pages/ProductList';
import AdminRoutes from './Component/AdminRoutes';
import AddProduct from './pages/admin_pages/AddProduct';
import EditForm from './pages/admin_pages/EditForm';
import EditPage from './pages/admin_pages/EditPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />

          <Route element={<AdminRoutes />}>
            <Route path='admin/productList' element={<ProductList />} />
            <Route path='admin/productAdd' element={<AddProduct />} />
            <Route path='admin/productEdit/:id' element={<EditPage />} />
          </Route>


          <Route element={<UserRoutes />}>
            <Route path='user/login' element={<Login />} />
            <Route path='user/signUp' element={<SignUp />} />
          </Route>



        </Route>

      </Routes>
      <ToastContainer autoClose={1000} />
    </>

  )
}

export default App
