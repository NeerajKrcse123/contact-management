import DashboardPage from "./pages/DashboardPage";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <div className="flex w-[100%]">
     
      <Sidebar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maps" element={<DashboardPage />} />
      </Routes>
</div>
    
  );
};

export default App;




