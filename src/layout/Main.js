import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/footer/Contact";
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
