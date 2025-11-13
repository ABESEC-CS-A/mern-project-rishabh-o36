import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<h1>About Page</h1>}/>
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        </Route>

        <Route path ="/user" element ={<UserDashboard />}>
          <Route index element ={<h1>User Home Page</h1>} />
          <Route path ="/user/profile" element ={<h1>User Profile Page</h1>} />
          <Route path ="/user/settings" element ={<h1>User Settings Page</h1>} />
        </Route>

        <Route path ="/admin" element ={<AdminDashboard />}>
          <Route index element ={<h1>Admin Home Page</h1>} />
          <Route path ="/admin/users" element ={<h1>Manage Users Page</h1>} />
          <Route path ="/admin/settings" element ={<h1>Admin Settings Page</h1>} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
