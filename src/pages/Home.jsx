import Firsthalf from "../components/Firsthalf";
import Bottomhalf from "../components/Bottomhalf";

function Home() {
  return (
<div className="min-h-screen bg-gray-200">
    <div className="relative w-full min-h-screen overflow-hidden">
        <Firsthalf />
        <Bottomhalf />
      </div>
    </div>
  );
}

export default Home;