import React from "react";
import { Link } from "react-router-dom";
import { LogOut, LucideMessagesSquare, User2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <>
      <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-emerald-700">
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center justify-center gap-2.5 text-white font-sans hover:opacity-80 transition-all"
              >
                <LucideMessagesSquare className="w-5 h-5" />
                <h1 className="text-lg font-bold tracking-widest">MitraLink</h1>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {authUser ? (
                <>
                  <Link to="/myprofile" className="px-2 py-1 bg-yellow-200 hover:opacity-95 text-zinc-900 font-semibold rounded-md flex items-center justify-center gap-2">
                    <User2 className="size-5" /> <span>Profile</span>
                  </Link>
                  <button
                    className="px-2 py-1 bg-rose-400 hover:opacity-95 text-zinc-900 font-semibold rounded-md flex items-center justify-center gap-2"
                    onClick={logout}
                  >
                    <LogOut className="size-5" />
                    <span className="inline">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="px-2 py-1 backdrop-blur-sm bg-yellow-200 rounded-md text-gray-800"
                  >
                    <span>Register</span>
                  </Link>
                  <Link
                    to="/login"
                    className="px-2 py-1 backdrop-blur-sm bg-rose-400 rounded-md text-gray-800"
                  >
                    <span>Login</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
