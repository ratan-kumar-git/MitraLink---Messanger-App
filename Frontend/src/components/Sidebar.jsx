import { LucideMessagesSquare, UserCircle, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skelton/SidebarSkeleton";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUserLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUserLoading) {
     return <SidebarSkeleton />; 
  }

  return (
    <aside className="h-full w-full sm:w-72 border-r bg-slate-50 dark:bg-slate-800 flex flex-col transition-all duration-200">
      {/* all users in side bar */}
      <div className="overflow-y-auto w-full">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full p-3 flex items-center gap-3 hover:bg-slate-100 hover:dark:bg-slate-700 transition-colors ${selectedUser?._id === user._id
                ? "dark:bg-slate-700 bg-slate-100"
                : ""
              }`}
          >
            <div className="relative">
              <img
                src={user.profilePic || "/avatar.webp"}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className=" text-left w-auto">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="grid grid-cols-3 w-full py-2 border-t bg-zinc-100 dark:bg-gray-800">
        <Link to={"/"} className="flex flex-col items-center justify-center cursor-pointer">
          <LucideMessagesSquare className="size-5" />
          <span className="font-medium block text-sm">Chats</span>
        </Link>
        <Link to={"/group"} className="flex flex-col items-center justify-center cursor-pointer">
          <Users className="size-5" />
          <span className="font-medium block text-sm">Groups</span>
        </Link>
        <Link to={"/profile"} className="flex flex-col items-center justify-center cursor-pointer">
          <UserCircle className="size-5" />
          <span className="font-medium block text-sm">Profile</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
