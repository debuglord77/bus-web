import Firsthalf from "../components/Firsthalf";
import Bottomhalf from "../components/Bottomhalf";

function Home() {
  return (
    <div className="relative w-full h-full flex justify-center items-center bg-gray-200">
      
        <Firsthalf />
        <Bottomhalf />
      
    </div>
  );
}

export default Home;
