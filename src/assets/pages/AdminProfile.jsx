import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './AdminProfile.css'; // Use a separate CSS file for admin profile

function AdminProfile() {
  // Get admin data from Outlet context
  const outletContext = useOutletContext();
  const admin = outletContext?.admin || {
    name: 'Admin User',
    role: 'Administrator',
    email: 'admin@email.com',
    phone: '+1 987 654 3210',
    department: 'Management',
    location: 'Head Office',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  };

  return (
    <div className="admin-profile-content">
      <div className="admin-profile-card-centered">
        <div className="admin-profile-quote">"Leadership is not a position or a title, it is action and example."</div>
        <div className="profile-avatar-wrapper">
          <img src={admin.avatar} alt="Profile" className="profile-avatar-large" />
        </div>
        <h2 className="profile-name-large">{admin.name}</h2>
        <p className="profile-role-large">{admin.role}</p>
        <div className="profile-details-list">
          <div className="profile-detail-row"><span>Email:</span> <span>{admin.email}</span></div>
          <div className="profile-detail-row"><span>Phone:</span> <span>{admin.phone}</span></div>
          <div className="profile-detail-row"><span>Department:</span> <span>{admin.department}</span></div>
          <div className="profile-detail-row"><span>Location:</span> <span>{admin.location}</span></div>
        </div>
        <button className="profile-edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default AdminProfile; 