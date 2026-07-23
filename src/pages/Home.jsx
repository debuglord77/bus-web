import Firsthalf from "../components/Firsthalf";
import Bottomhalf from "../components/Bottomhalf";

function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="relative w-[360px] h-[740px] border-none border-blue-500 bg-black  overflow-hidden">
        <Firsthalf />
        <Bottomhalf />
      </div>
    </div>
  );
}

export default Home;