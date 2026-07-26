import passes from "../assets/logo/passes.png";
import live from "../assets/logo/live.png";
import ticket from "../assets/logo/ticket.png";
import home from "../assets/logo/home.png";
import profile from "../assets/logo/profile.png";
import p_image from "../assets/logo/passimage.png";

import { useState, useEffect } from "react";

function Passes() {


// Countdown timer (30 hours)
const [timeLeft, setTimeLeft] = useState(30 * 60 * 60);

useEffect(() => {
  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
const seconds = String(timeLeft % 60).padStart(2, "0");
  return (
    <div className="relative w-full border-2 border-green-500 h-screen bg-black overflow-hidden flex flex-col">
      

        <div className="w-full h-17 border-2 flex flex-row pt-4">
          <h2 className="font-bold text-white px-5 translate-x-4">Passes</h2>
          <button className="absolute right-27 w-20 h-7 font-bold text-[10px] text-white bg-[#2d2a31] rounded-4xl">Help</button>
          <button className="absolute right-5 w-20 h-7 font-bold text-[10px]  text-white bg-[#2d2a31] rounded-4xl">History</button>

        </div>

        <div className="w-full h-10 translate-x-4 ">
            <button className="absolute left-4 w-20 h-8 font-bold text-[10px] bg-[#d6d5e3] rounded-4xl">Bus(1/1)</button>
        </div>

        <div className=" flex justify-center border-2  items-center px-4 pt-1 ">


            <div className=" relative w-[90%] h-120  border-2 border-blue-500  rounded-4xl flex justify-center items-center  pb-20 ">
                {/* Background image inside the frame */}
                <img
                    src={p_image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-4xl"
                />


                <div className="absolute  left-1/2 -translate-x-1/2 w-[85%] h-25  bottom-[18%]   border-green-500 flex flex-row justify-around items-center">
                    <div className="w-22 h-14  bg-white  rounded-xl flex flex-col justify-center items-center px-3 translate-x-3">
                        <h3 className="text-[10px] px-2 font-mono ">Jun 29</h3>
                        <h3 className="text-[15px] font-mono ">{hours}:{minutes}:{seconds}</h3>
                    </div>
                    <div className="w-30 h-20 border-none border-2"></div>
                    <div className="w-14 h-14  border-none bg-white rounded-xl -translate-x-6 -translate-y-1"></div>
                </div>

                

                

            </div>

            


        </div>



        {/* bottom nav */}   
        <div className=" absolute bottom-0 left-0 w-full h-20 bg-black ">
            <div className="w-full h-20 pt-1.5 px-4 border-none border-black  flex flex-row  justify-between">

                <button
                onClick={() => navigate("/")}
                className="flex flex-col items-center cursor-pointer"
                >
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                        src={home}
                        alt="Home"
                        className="w-15 h-15 object-cover"
                        />
                    </div>

                    <h3 className="text-xs text-gray-500">Home</h3>
                </button>

                <button
                onClick={() => navigate("/passes")}
                className="flex flex-col items-center cursor-pointer"
                >
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                        src={passes}
                        alt="Passes"
                        className="w-15 h-15 object-cover"
                        />
                    </div>

                    <h3 className="text-xs text-gray-500">Passes</h3>
                </button>
                

                <button
                onClick={() => navigate("/live")}
                className="flex flex-col items-center cursor-pointer"
                >
                    <div className="w-10 h-10  flex items-center justify-center">
                        <img
                        src={live}
                        alt="Live"
                        className="w-6 h-6 object-cover"
                        />
                    </div>

                    <h3 className="text-xs text-gray-500">Live</h3>
                </button>

                <button
                onClick={() => navigate("/ticket")}
                className="flex flex-col items-center cursor-pointer"
                >
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                        src={ticket}
                        alt="Ticket"
                        className="w-9 h-9 object-cover"
                        />
                    </div>

                    <h3 className="text-xs text-gray-500">Ticket</h3>
                </button>

                <button
                onClick={() => navigate("/profile")}
                className="flex flex-col items-center cursor-pointer"
                >
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                        src={profile}
                        alt="Profile"
                        className="w-9 h-9 object-cover"
                        />
                    </div>

                    <h3 className="text-xs text-gray-500">Profile</h3>
                </button>

            </div>
        </div>    
      
    </div>
  );
}

export default Passes;