import React, { useState } from 'react';
import './LeavePage.css';
import LeaveForm from '../components/LeaveForm';

const LEAVE_TYPES = ['Sick', 'Casual', 'Earned'];
const LEAVE_QUOTA = 5;
const appliedLeaves = [
  { id: 1, type: 'Sick', start: '2024-06-10', end: '2024-06-12', reason: 'Fever', status: 'Pending' },
  { id: 2, type: 'Casual', start: '2024-06-15', end: '2024-06-16', reason: 'Family event', status: 'Approved' },
  { id: 3, type: 'Earned', start: '2024-06-20', end: '2024-06-22', reason: 'Vacation', status: 'Rejected' },
];

function LeavePage() {
  const [isLeaveFormOpen, setLeaveFormOpen] = useState(false);

  const leaveTypeStats = LEAVE_TYPES.map(type => {
    const applied = appliedLeaves.filter(l => l.type === type).length;
    return { type, quota: LEAVE_QUOTA, applied };
  });

  return (
    <div className="leave-content">
      {isLeaveFormOpen && <LeaveForm onClose={() => setLeaveFormOpen(false)} />}
      <div className="leave-header">
        <h1 className="leave-title">Your Leave Summary</h1>
        <button 
          className="request-leave-btn"
          onClick={() => setLeaveFormOpen(true)}
        >
          Request a Leave
        </button>
      </div>

      <div className="leave-types-list">
        {leaveTypeStats.map(stat => (
          <div className="leave-type-card" key={stat.type}>
            <h2 className="leave-type-name">{stat.type} Leave</h2>
            <p className="leave-type-desc">
              You can take <b>{stat.quota}</b> {stat.type.toLowerCase()} leaves this year.<br />
              You have already applied for <b>{stat.applied}</b> {stat.type.toLowerCase()} leaves.
            </p>
          </div>
        ))}
      </div>
      
      <div className="leave-table-section">
        <h2 className="table-title">Your Applied Leaves</h2>
        <table className="leave-table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Reason</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {appliedLeaves.map(leave => (
              <tr key={leave.id}>
                <td>{leave.type}</td>
                <td>{leave.start}</td>
                <td>{leave.end}</td>
                <td>{leave.reason}</td>
                <td className={leave.status.toLowerCase()}>
                  <span className={`status-badge ${leave.status.toLowerCase()}`}>
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeavePage; 