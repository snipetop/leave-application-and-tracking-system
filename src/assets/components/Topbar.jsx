import React from 'react';
import './Topbar.css';
import { FaBell } from 'react-icons/fa';

const Topbar = ({ user }) => (
  <header className="topbar">
    <div className="topbar-actions">
      <input className="topbar-search" type="text" placeholder="Search..." />
      <button className="topbar-icon"><FaBell /></button>
      <div className="topbar-user">
        <img src={user.avatar} alt="User" className="topbar-avatar" />
        <span>{user.name}</span>
      </div>
    </div>
  </header>
);

export default Topbar; 