import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const Links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "btn-link text-red-500 font-bold" : "bg-none hover:bg-none hover:text-red-500"}>Home</NavLink></li>
        <li><NavLink to="/donation" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "btn-link text-red-500 font-bold" : ""}>Donation</NavLink></li>
        <li><NavLink to="/statistics" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "btn-link text-red-500 font-bold" : ""}>Statistics</NavLink></li>
    </>

    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost hover:bg-transparent"><img className="w-full h-full" src="https://i.ibb.co/0KbJ3tw/Logo.png" alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
        </div>
    );
};

export default Header;