import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] w-full flex flex-col justify-center items-center mt-16 gap-10 bg-[url('tricolr.webp')] bg-cover bg-center">
        <h1 className="text-xl font-semibold text-black">Home</h1>
        <Link
          to="/chat"
          className="px-2 py-1 bg-yellow-600 text-zinc-900 font-semibold rounded-md flex items-center justify-center gap-2"
        >
          Click hete to Start Your Chat
        </Link>
        <div className="text-center text-black">
          Home Page under construction ... <br />
          coomming soon !!
        </div>
      </div>
    </>
  );
};

export default Home;
