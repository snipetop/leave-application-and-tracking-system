import React from 'react';
import './AdminLeavesPage.css';

const LEAVE_TYPES = ['Sick', 'Casual', 'Earned'];
const LEAVE_QUOTA = 5;
const leaveRequests = [
  { id: 1, employee: 'John Doe', type: 'Sick', start: '2024-06-10', end: '2024-06-12', reason: 'Fever', status: 'Pending' },
  { id: 2, employee: 'Jane Smith', type: 'Casual', start: '2024-06-15', end: '2024-06-15', reason: 'Personal', status: 'Approved' },
  { id: 3, employee: 'Alice Brown', type: 'Earned', start: '2024-06-20', end: '2024-06-22', reason: 'Vacation', status: 'Pending' },
];

function AdminLeavesPage() {
  // Calculate leave stats for each type (for all employees)
  const leaveTypeStats = LEAVE_TYPES.map(type => {
    const applied = leaveRequests.filter(l => l.type === type).length;
    return { type, quota: LEAVE_QUOTA, applied };
  });

  return (
    <div className="leave-content">
      <div className="leave-types-container">
        <h1 className="leave-title">Leave Summary (All Employees)</h1>
        <div className="leave-types-list">
          {leaveTypeStats.map(stat => (
            <div className="leave-type-card" key={stat.type}>
              <h2 className="leave-type-name">{stat.type} Leave</h2>
              <p className="leave-type-desc">
                Each employee can take <b>{stat.quota}</b> {stat.type.toLowerCase()} leaves per year.<br />
                {stat.applied} requests submitted for {stat.type.toLowerCase()} leave.
              </p>
            </div>
          ))}
        </div>
        <div className="leave-table-section">
          <h2 className="leave-table-title">Recent Leave Requests</h2>
          <table className="leave-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>Start</th>
                <th>End</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map(leave => (
                <tr key={leave.id}>
                  <td>{leave.employee}</td>
                  <td>{leave.type}</td>
                  <td>{leave.start}</td>
                  <td>{leave.end}</td>
                  <td>{leave.reason}</td>
                  <td className={leave.status.toLowerCase()}>{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminLeavesPage; 