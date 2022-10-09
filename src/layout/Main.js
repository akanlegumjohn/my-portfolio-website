import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
const Main = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Contact />
    </>
  );
};

export default Main;
