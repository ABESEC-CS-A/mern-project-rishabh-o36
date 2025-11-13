import React from 'react'

const UserNavbar = () => {
  return (
    <div>
      <h2>Welcome User</h2>
      <Link to ='/'>Home</Link>
        <Link to ='/cart'>Profile</Link>
        <Link to ='/user/order'>Settings</Link>
        <Link to ='/user/profile'>Logout</Link>
        <Link to ='/user/logout'>Logout</Link>

    </div>
  )
}

export default UserNavbar
