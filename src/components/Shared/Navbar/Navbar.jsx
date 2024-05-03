import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../images/logo.png';
import './Navbar.css';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    const lists = [
        <li id='navbar-item' style={{fontSize: '17px'}}><NavLink to='/'>Home</NavLink></li>,
        <li id='navbar-item' style={{fontSize: '17px'}}><NavLink to='/about'>About</NavLink></li>,
        <li id='navbar-item' style={{fontSize: '17px'}}><NavLink to='/userProfile'>User</NavLink></li>,
        <li id='navbar-item' style={{fontSize: '17px'}}><NavLink to='/register'>Register</NavLink></li>,
        <li id='navbar-item' style={{fontSize: '17px'}}><NavLink to='/login'>Login</NavLink></li>,
    ]
    return (
        <div style={{background: "whitesmoke"}}>
            <div className="navbar w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {lists}
                        </ul>
                    </div>
                    <img className='w-20 h-20 object-contain' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <p>{user?.email}</p>
                    }
                    <a className="btn bg-simple text-complex">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;