import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Group from './pages/Group';
import UserProfilePage from './pages/UserProfilePage';
import { useAuthStore } from './store/useAuthStore'
import ChatPage from './pages/ChatPage';
import MyProfile from './pages/MyProfile';


const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className='size-10 animate-spin' />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to="/chat" />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/chat" />} />

        {/* Pages */}
        <Route path='/chat' element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path='/chat/:userName' element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path='/group' element={authUser ? <Group /> : <Navigate to="/login" />} />
        <Route path='/myprofile' element={authUser ? <MyProfile /> : <Navigate to="/login" />} />
        <Route path='/profile' element={authUser ? <UserProfilePage /> : <Navigate to="/login" />} />
        <Route path='/profile/:userName' element={authUser ? <UserProfilePage /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App