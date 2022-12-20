import React, { useEffect } from 'react'
import {Link,  useNavigate } from 'react-router-dom'
const Navbar = () => {
  let navigate = useNavigate()
 
  const logout = () =>{
    localStorage.removeItem('data')
    navigate('/login',{ replace: true })
}
  return (
    <div>
      <div className='address__details'>
        <div>
          <Link to='/company'> <h5>Company Info</h5></Link>
        </div>
        <div>
        <Link to='/login'> <h5 onClick={logout}>Logout</h5></Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar