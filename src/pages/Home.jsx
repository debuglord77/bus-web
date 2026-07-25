import Firsthalf from "../components/Firsthalf";
import Bottomhalf from "../components/Bottomhalf";

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gray-200 overflow-hidden">
      
        <Firsthalf />
        <Bottomhalf />
      
    </div>
  );
}

export default Home;
