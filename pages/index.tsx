import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import AttackLog from "../components/AttackLog";
import GladiatorsHome from "../components/GladiatorsHome";
import Navbar from "../components/Navbar";

function Home() {
  const { account } = useWeb3React();

  return (
    <div className="h-full">
      <Navbar />
      {
        account ? <div className="flex flex-col justify-center w-full py-4 sm:py-6 md:py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-0 md:gap-x-4 md:gap-y-0">
          <GladiatorsHome />
          <AttackLog />
        </div>
      </div> : <div className="flex flex-col items-center justify-center h-full w-full pt-48">
        <h1 className="text-xl md:text-2xl font-bold text-center animate-pulse">Please connect wallet!</h1>
      </div>
      }
    </div>
  );
}

export default Home;
