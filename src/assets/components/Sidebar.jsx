import React from 'react';
import './Sidebar.css';
import { FaHome, FaClipboardList, FaUser, FaCog, FaSignOutAlt, FaClock } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    // Optionally clear auth/session here
    navigate('/');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">S.K TEXTILE</div>
      <nav className="sidebar-nav">
        {active === 'admin' ? (
          <>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}><FaHome /> Dashboard</NavLink>
            <NavLink to="/admin/leaves" className={({ isActive }) => isActive ? 'active' : ''}><FaClipboardList /> Leaves</NavLink>
            <NavLink to="/admin/attendance" className={({ isActive }) => isActive ? 'active' : ''}><FaClock /> Attendance</NavLink>
            <NavLink to="/admin/profile" className={({ isActive }) => isActive ? 'active' : ''}><FaUser /> Profile</NavLink>
            <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'active' : ''}><FaCog /> Settings</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/employee" className={({ isActive }) => isActive ? 'active' : ''}><FaHome /> Dashboard</NavLink>
            <NavLink to="/employee/leave" className={({ isActive }) => isActive ? 'active' : ''}><FaClipboardList /> Leaves</NavLink>
            <NavLink to="/employee/attendance" className={({ isActive }) => isActive ? 'active' : ''}><FaClock /> Attendance</NavLink>
            <NavLink to="/employee/profile" className={({ isActive }) => isActive ? 'active' : ''}><FaUser /> Profile</NavLink>
            <NavLink to="/employee/settings" className={({ isActive }) => isActive ? 'active' : ''}><FaCog /> Settings</NavLink>
          </>
        )}
        <a className="logout" href="#" onClick={handleLogout}><FaSignOutAlt /> Logout</a>
      </nav>
    </aside>
  );
};

export default Sidebar; 