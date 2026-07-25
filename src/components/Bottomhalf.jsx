import bus from "../assets/logo/bus.png";
import auto from "../assets/logo/auto.png";
import train from "../assets/logo/train.png";
import metro from "../assets/logo/metro.png";

import passes from "../assets/logo/passes.png";
import live from "../assets/logo/live.png";
import ticket from "../assets/logo/ticket.png";
import home from "../assets/logo/home.png";
import profile from "../assets/logo/profile.png";

import { useNavigate } from "react-router-dom";




function Bottomhalf(){
    const navigate = useNavigate();
    
    return(
        <div className="bg-white absolute top-[85%] border-2 left-0 w-full h-[60px] rounded-t-[36px] justify-center pt-3 shadow-xl/20">
            
            <div className="w-20 h-1 border border-none rounded-xl bg-[#dfdedf] "></div>





            <div className="absolute w-full flex flex-col gap-4 pt-7 px-5">
                {/* search bar */}
                <div className=" w-[100%] h-15  rounded-xl bg-red-500 flex shadow-xl/20 ">
                    <input type="text" placeholder="       Search 'Bus Stop'" className="w-full rounded-xl text-white" />
                </div>
                {/* transport icons */}
                <div className="w-full h-20 pt-2.5 px-6 border-none border-black  flex flex-row  justify-between  ">

                    <div className="flex flex-col gap-2 justify-center items-center ">
                        <div className="w-11 h-11 bg-[#ffde7a] border-none border-black rounded-4xl flex items-center justify-center">
                        <img 
                            src={bus} 
                            alt="Bus" 
                            className="w-10 h-10 pt-1 object-cover " />
                        </div>
                        <h3 className=" text-xs text-grey-500">Bus</h3>

                    </div>
                    

                    <div className="flex flex-col gap-2 justify-center items-center ">
                        <div className="w-11 h-11 bg-[#c4dcb8] border-none border-black rounded-4xl flex items-center justify-center">
                        <img 
                            src={train} 
                            alt="Train" 
                            className="w-10 h-10 pt-1 object-cover " />
                        </div>
                        <h3 className=" text-xs text-grey-500">Train</h3>

                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center ">
                        <div className="w-11 h-11 bg-[#a5dbff] border-none border-black rounded-4xl flex items-center justify-center">
                        <img 
                            src={metro} 
                            alt="Metro" 
                            className="w-10 h-10 pt-1 object-cover " />
                        </div>
                        <h3 className=" text-xs text-grey-500">Metro</h3>

                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center ">
                        <div className="w-11 h-11 bg-[#e3d3f8] border-none border-black rounded-4xl flex items-center justify-center">
                        <img 
                            src={auto} 
                            alt="auto" 
                            className="w-10 h-10  object-cover " />
                        </div>
                        <h3 className=" text-xs text-grey-500">Auto/Cab</h3>

                    </div>

                </div>  

            </div>

            {/* box */}
            <div className="absolute w-[95%] h-35 bg-[#f3bc61] top-55 border-none border-black rounded-2xl shadow-xl/20"></div>





               

            {/* bottom nav */}   
            <div className=" absolute bottom-0 w-full h-20  border-2 border-green-500">
                <div className="w-full h-20 pt-1.5 px-4 border-2 border-black  flex flex-row  justify-between">
    
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

export default Bottomhalf;
