import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/chat/ChatContainer";
import NoChatSelected from "../components/chat/NoChatSelected";
const Home = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-16">
        <div className="bg-base-100 rounded-lg shadow-cl w-full h-[calc(100vh-64px)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            {!selectedUser ? (
              <>
                <Sidebar />
                <NoChatSelected />
              </>
            ) : (
              <>
                <div className="hidden sm:block">
                  <Sidebar />
                </div>
                <ChatContainer />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
