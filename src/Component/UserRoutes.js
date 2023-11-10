import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const UserRoutes = () => {
  const { user } = useSelector((store) => store.userInfo);
  return user === null ? <Outlet /> : <Navigate to='/' replace />
}

export default UserRoutes


