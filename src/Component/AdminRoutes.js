import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AdminRoutes = () => {
  const { user } = useSelector((store) => store.userInfo);
  return user === null ? <Navigate to='/user/login' /> :
    user.isAdmin ? <Outlet /> : <h1>You are not authorsied</h1>
}

export default AdminRoutes
