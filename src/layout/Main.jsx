import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;