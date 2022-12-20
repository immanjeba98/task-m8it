import React, { useEffect } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const PrivateRouter = () => {
    let location = useLocation()
  
    let isLoggedIn = JSON.parse(localStorage.getItem('data'))
    return (
        isLoggedIn?.name ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default PrivateRouter