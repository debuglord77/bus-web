import passes from "../assets/logo/passes.png";
import live from "../assets/logo/live.png";
import ticket from "../assets/logo/ticket.png";
import home from "../assets/logo/home.png";
import profile from "../assets/logo/profile.png";
import p_image from "../assets/logo/passimage.png";

function Passes() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="relative w-[360px] h-[740px] border-none border-blue-500 bg-black  overflow-hidden ">

        <div className="w-full h-17  flex flex-row pt-4">
          <h2 className="font-bold px-5">Passes</h2>
          <button className="absolute right-27 w-20 h-7 font-bold text-[10px] text-white bg-[#2d2a31] rounded-4xl">Help</button>
          <button className="absolute right-5 w-20 h-7 font-bold text-[10px]  text-white bg-[#2d2a31] rounded-4xl">History</button>

        </div>

        <div className="w-full h-10 ">
            <button className="absolute left-4 w-20 h-8 font-bold text-[10px] bg-[#d6d5e3] rounded-4xl">Bus(1/1)</button>
        </div>

        <div className="w-full h-130  flex justify-center items-center  ">


            <div className="w-80 h-120 border-2 border-blue-500 bg-green-500 rounded-4xl flex justify-center items-center  ">
                {/* Background image inside the frame */}
                <img
                    src={p_image}
                    alt=""
                    className="absolute left-1 w-90 h-130 object-cover"
                />

                <div className=" w-43 h-70 border-2 border-red-500 bg-white rounded-[4vw] flex justify-center items-center flex-col ">
                    <div className="w-30 h-30 border-2 border-blue-500 rounded-[3.5vw] "></div>
                    <h1 className="text-[30px] font-semibold">1000</h1>
                    <p className="text-[12px] pt-2">VALID TILL</p>
                    <h2 className="text-[20px] font-semibold">16/07/2026</h2>
                </div>

            </div>

            <div className="w-80 h-25 absolute bottom-31  border-none border-2 flex flex-row justify-around pt-2 ">
                <div className="w-23 h-13 border-none border-2 bg-white rounded-[1.2vw] flex flex-col justify-center items-center px-3">
                    <h3 className="text-[10px] px-2 font-mono ">Jun 29</h3>
                    <h3 className="text-[15px] font-mono ">29:23:23</h3>
                </div>
                <div className="w-30 h-20 border-none border-2"></div>
                <div className="w-16 h-16 border-none border-2 bg-white rounded-[1.2vw] -translate-y-[2px]"></div>
            </div>


        </div>



        {/* bottom nav */}   
        <div className=" absolute bottom-0 w-full h-20  border-none border-green-500">
            <div className="w-80 h-20 pt-1.5 px-4 border-none border-black  flex flex-row gap-7">

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
    </div>
  );
}

export default Passes;