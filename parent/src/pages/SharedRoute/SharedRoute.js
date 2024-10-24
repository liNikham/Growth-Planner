import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const SharedRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedRoute;
