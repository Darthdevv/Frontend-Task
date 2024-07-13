import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
// import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
