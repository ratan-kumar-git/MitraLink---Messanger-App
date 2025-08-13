import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Link } from 'react-router-dom'
import { LogOut, LucideMessagesSquare } from 'lucide-react'

const Navbar = () => {
  const { logout, authUser } = useAuthStore()
  return (
    <>
      <header className='bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-emerald-700'>
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center justify-center gap-2.5 text-white font-sans hover:opacity-80 transition-all">
                <LucideMessagesSquare className="w-5 h-5" />
                <h1 className="text-lg font-bold tracking-widest">MitraLink</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {authUser && (
                <>
                  <button className="flex gap-2 items-center text-white hover:opacity-80" onClick={logout}>
                    <LogOut className="size-5" />
                    <span className="inline">Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar