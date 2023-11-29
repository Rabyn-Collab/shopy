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
import EditPage from './pages/admin_pages/EditPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/user_pages/CartPage';
import LogRoutes from './Component/LogRoutes';
import Shipping from './pages/auth_pages/Shipping';
import OrderPage from './pages/user_pages/OrderPage';
import UserProfile from './pages/user_pages/UserProfile';
import OrderDetail from './pages/user_pages/OrderDetail';
import BothRoutes from './Component/BothRoutes';

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
          <Route path='product/:id' element={<ProductDetail />} />


          <Route element={<LogRoutes />}>
            <Route path='user/login' element={<Login />} />
            <Route path='user/signUp' element={<SignUp />} />

          </Route>


          <Route element={<UserRoutes />}>
            <Route path='user/cart' element={<CartPage />} />
            <Route path='user/shipping' element={<Shipping />} />
            <Route path='user/checkout' element={<OrderPage />} />


          </Route>

          <Route element={<BothRoutes />}>
            <Route path='user/profile' element={<UserProfile />} />
            <Route path='user/order/:id' element={<OrderDetail />} />
          </Route>
        </Route>

      </Routes>
      <ToastContainer autoClose={1000} />
    </>

  )
}

export default App
