import { NavLink, Outlet } from "react-router-dom";

const CreatorDashboard = () => {
    return (
        <div>
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="CreatorDashboard/cart">My Cart</NavLink></li>
                </ul>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default CreatorDashboard;