import { Link } from "react-router-dom";
import logo from '../../../assets/logos/healthcare.png'


const Navbar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/about'>Service</Link></li>

    </>


    return (
        <div>
            <div className="navbar bg-[#10888890] h-18 mb-4 px-12 z-10 relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navItems}

                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <img src={logo} className="w-12" alt="" /> <span className="text-3xl font-bold text-white font-serif">Doctalk</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-xl">

                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn text-white btn-info">APPOINTMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;