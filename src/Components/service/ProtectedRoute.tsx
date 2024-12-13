import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const isloggedIn = window.localStorage.getItem("loggedIn")
  return isloggedIn ==='true'?<Outlet/>: <Navigate to="/login"/>

}

export default ProtectedRoute
