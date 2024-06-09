import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
       // TODO: get isAdmin value from the database
    //    const [isAdmin] = useAdmin();
       const isAdmin = useAdmin();
       const isCreator = true;
       const isUser = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu">
                   {
                    isAdmin && <>
                        <li><NavLink to="/dashboard/manageuser">
                            <FaUser/>
                            Manage User</NavLink></li>
                        <li><NavLink to="/dashboard/managecontests">Manage Contests</NavLink></li>
                    
                    </>
                   }
                   {
                    isCreator && <>
                     <li><NavLink to="/dashboard/addcontest">Add Contest</NavLink></li>
                    <li><NavLink to="/dashboard/mycreatedcontest">My Created Contest</NavLink></li>
                    </>
                    }
                   {
                    isUser && <>
                     <li><NavLink to="/dashboard/myprofile">My Profile</NavLink></li>
                    <li><NavLink to="/dashboard/myparticipatedcontest">My Participated Contest</NavLink></li>
                    <li><NavLink to="/dashboard/mywinningcontest">My Winning Contest</NavLink></li>
                    </>
                   }
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome/>
                        Home
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;