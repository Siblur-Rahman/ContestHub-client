import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
    return (
        <div>
            <div className="flex w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/userdashboard/myprofile">My Profile</NavLink></li>
                </ul>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;