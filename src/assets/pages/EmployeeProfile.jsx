import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './EmployeeProfile.css';
import defaultAvatar from '../images/default-profile.svg'; // Default avatar

function EmployeeProfile() {
  const { user } = useOutletContext() || {};
  
  const employee = user || {
    name: 'Employee Name',
    role: 'Employee Role',
    email: 'employee@example.com',
    phone: '123-456-7890',
    department: 'Employee Department',
    location: 'Work Location',
    avatar: defaultAvatar, 
  };

  return (
    <div className="employee-profile-content">
      <div className="employee-profile-card-centered">
        <div className="employee-profile-quote">"The only way to do great work is to love what you do."</div>
        <div className="profile-avatar-wrapper">
          <img src={employee.avatar} alt="Profile" className="profile-avatar-large" />
        </div>
        <h2 className="profile-name-large">{employee.name}</h2>
        <p className="profile-role-large">{employee.role}</p>
        <div className="profile-details-list">
          <div className="profile-detail-row"><span>Email:</span> <span>{employee.email}</span></div>
          <div className="profile-detail-row"><span>Phone:</span> <span>{employee.phone}</span></div>
          <div className="profile-detail-row"><span>Department:</span> <span>{employee.department}</span></div>
          <div className="profile-detail-row"><span>Location:</span> <span>{employee.location}</span></div>
        </div>
        <button className="profile-edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default EmployeeProfile; 