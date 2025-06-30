import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBell, FaCog } from 'react-icons/fa';
import EmployeeProfile from '../components/EmployeeProfile';
import './EmployeeSettings.css';

const TABS = [
  { key: 'profile', label: 'Profile', icon: <FaUser /> },
  { key: 'account', label: 'Account', icon: <FaEnvelope /> },
  { key: 'notifications', label: 'Notifications', icon: <FaBell /> },
  { key: 'preferences', label: 'Preferences', icon: <FaCog /> },
];

function EmployeeSettings() {
  const user = {
    name: 'John Doe',
    role: 'Employee',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'john.doe@email.com',
  };

  const [activeTab, setActiveTab] = useState('profile');
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(true);
  const [leaveAlerts, setLeaveAlerts] = useState(true);
  const [leaveReminders, setLeaveReminders] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved! (Demo only)');
  };

  return (
    <div className="employee-settings-dashboard-bg">
      <div className="employee-settings-dashboard-card">
        {/* Tab Bar */}
        <div className="employee-settings-dashboard-tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`employee-settings-dashboard-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
              aria-selected={activeTab === tab.key}
              aria-controls={`tab-panel-${tab.key}`}
              id={`tab-${tab.key}`}
              role="tab"
              tabIndex={activeTab === tab.key ? 0 : -1}
            >
              <span className="employee-settings-dashboard-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="employee-settings-dashboard-content">
          {activeTab === 'profile' && (
            <div className="employee-settings-dashboard-tab-content" id="tab-panel-profile" role="tabpanel" aria-labelledby="tab-profile">
              <EmployeeProfile name={user.name} role={user.role} avatar={user.avatar} />
            </div>
          )}
          {activeTab === 'account' && (
            <form className="employee-settings-dashboard-form" id="tab-panel-account" role="tabpanel" aria-labelledby="tab-account" onSubmit={handleSave}>
              <div className="employee-settings-dashboard-section-title">Account Settings</div>
              <div className="employee-settings-dashboard-section-desc">Update your login credentials.</div>
              <label>Email Address
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>New Password
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                />
              </label>
              <button type="submit" className="employee-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'notifications' && (
            <form className="employee-settings-dashboard-form" id="tab-panel-notifications" role="tabpanel" aria-labelledby="tab-notifications" onSubmit={handleSave}>
              <div className="employee-settings-dashboard-section-title">Notification Settings</div>
              <div className="employee-settings-dashboard-section-desc">Control how you receive alerts.</div>
              <label className="employee-settings-dashboard-switch-label">
                Enable Email Notifications
                <div className="employee-settings-dashboard-switch">
                  <input
                    type="checkbox"
                    checked={notification}
                    onChange={e => setNotification(e.target.checked)}
                  />
                  <span className="slider"></span>
                </div>
              </label>
              <button type="submit" className="employee-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'preferences' && (
            <form className="employee-settings-dashboard-form" id="tab-panel-preferences" role="tabpanel" aria-labelledby="tab-preferences" onSubmit={handleSave}>
              <div className="employee-settings-dashboard-section-title">Leave Preferences</div>
              <div className="employee-settings-dashboard-section-desc">Customize your leave notifications.</div>
              <label className="employee-settings-dashboard-switch-label">
                Leave Request Alerts
                <div className="employee-settings-dashboard-switch">
                  <input
                    type="checkbox"
                    checked={leaveAlerts}
                    onChange={() => setLeaveAlerts(!leaveAlerts)}
                  />
                  <span className="slider"></span>
                </div>
              </label>
              <div className="employee-settings-dashboard-desc">Get notified when your leave is approved/rejected</div>
              <label className="employee-settings-dashboard-switch-label">
                Upcoming Leave Reminders
                <div className="employee-settings-dashboard-switch">
                  <input
                    type="checkbox"
                    checked={leaveReminders}
                    onChange={() => setLeaveReminders(!leaveReminders)}
                  />
                  <span className="slider"></span>
                </div>
              </label>
              <div className="employee-settings-dashboard-desc">Receive reminders before your scheduled leaves</div>
              <button type="submit" className="employee-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
        </div>
        {/* Footer Info Block */}
        <div className="employee-settings-dashboard-footer-info">
          Settings are saved automatically.
        </div>
      </div>
    </div>
  );
}

export default EmployeeSettings; 