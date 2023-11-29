import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const BothRoutes = () => {
  const { user } = useSelector((store) => store.userInfo);
  return user === null ? <Navigate to='/user/login' /> : <Outlet />
}

export default BothRoutes


