
import LineChart from "../components/LineChart";
import Map from "../components/Map";

const DashboardPage = () => {
  return (
    <>
    
        <div className="bg-blue-600 py-4  fixed top-0 left-0 w-full">
          <h1 className="text-2xl text-white text-center font-semibold">COVID-19 Dashboard</h1>

        </div>

        {/* Line Chart Section */}
        <div className="container mx-auto ">
        <div className="mb-8 mt-6">
          <h2 className="text-xl font-semibold text-center ">
            Worldwide Cases Fluctuations
          </h2>
          <div className="mt-4">
            <LineChart />
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-center ">
            World Map with COVID-19 Data
          </h2>
          <div className="mt-4">
            <Map/>
          </div>
        </div>
        </div>
     
    </>
  );
};

export default DashboardPage;

