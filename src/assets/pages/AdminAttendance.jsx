import React, { useState } from 'react';
import './AdminAttendance.css';
import { FaCheckCircle, FaTimesCircle, FaUserEdit, FaInfoCircle } from 'react-icons/fa';
import Profile from '../components/Profile';
import { useOutletContext } from 'react-router-dom';

const attendanceData = [
  { id: 1, name: 'John Doe', employeeId: 'EMP001', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'present' },
  { id: 2, name: 'Jane Smith', employeeId: 'EMP002', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', checkIn: '08:45 AM', checkOut: '05:30 PM', status: 'present' },
  { id: 3, name: 'Mike Johnson', employeeId: 'EMP003', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', checkIn: '09:15 AM', checkOut: '06:15 PM', status: 'present' },
  { id: 4, name: 'Sarah Wilson', employeeId: 'EMP004', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', checkIn: '--', checkOut: '--', status: 'absent' }
];

const statusInfo = {
  present: { color: '#22c55e', icon: <FaCheckCircle /> },
  absent: { color: '#ef4444', icon: <FaTimesCircle /> }
};

const AdminAttendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get admin data from Outlet context
  const outletContext = useOutletContext();
  const admin = outletContext?.admin || { name: 'Admin User', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' };

  // Debug logging
  console.log('AdminAttendance rendered');
  console.log('Outlet context:', outletContext);
  console.log('Admin data:', admin);

  const filteredData = attendanceData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = attendanceData.length;
  const present = attendanceData.filter(e => e.status === 'present').length;
  const absent = attendanceData.filter(e => e.status === 'absent').length;

  return (
    <div className="attendance-content-wrapper" id="admin-attendance-wrapper">
      <div className="profile-header-flex">
        <h1 className="profile-header">Attendance Management</h1>
        {/* <Profile name={admin.name} role="Administrator" avatar={admin.avatar} /> */}
      </div>
      <div className="search-section">
        <input
          className="search-box"
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search employees by name"
        />
      </div>
      <div className="attendance-summary-row">
        <span>Total: <b>{total}</b></span>
        <span>Present: <b>{present}</b></span>
        <span>Absent: <b>{absent}</b></span>
      </div>
      <div className="attendance-grid">
        {filteredData.map(employee => (
          <div className="attendance-card" key={employee.id}>
            <div className="attendance-card-header">
              {/* <img src={employee.avatar} alt={`${employee.name}'s profile picture`} className="attendance-avatar" /> */}
              <div>
                <div className="attendance-name">{employee.name}</div>
                <div className="attendance-id">{employee.employeeId}</div>
              </div>
            </div>
            <div className="attendance-info">
              <div><b>Check In:</b> {employee.checkIn}</div>
              <div><b>Check Out:</b> {employee.checkOut}</div>
            </div>
            <div className="attendance-status-row">
              <span
                className="attendance-status-badge"
                style={{ background: statusInfo[employee.status].color }}
                aria-label={`Status: ${employee.status}`}
              >
                {statusInfo[employee.status].icon} {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
              </span>
              <button 
                className="attendance-action-btn"
                aria-label={`Edit ${employee.name}'s attendance`}
                title="Edit attendance"
              >
                <FaUserEdit />
              </button>
              <button 
                className="attendance-action-btn"
                aria-label={`View ${employee.name}'s attendance details`}
                title="View details"
              >
                <FaInfoCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="admin-attendance-footer">© 2024 Leave Management System</div>
    </div>
  );
};

export default AdminAttendance; 