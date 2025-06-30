import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaBell, FaClipboardCheck } from 'react-icons/fa';
import AdminProfile from '../components/AdminProfile';
import './AdminSettings.css';

const TABS = [
  { key: 'profile', label: 'Profile', icon: <FaUser /> },
  { key: 'account', label: 'Account', icon: <FaEnvelope /> },
  { key: 'notifications', label: 'Notifications', icon: <FaBell /> },
  { key: 'leave', label: 'Leave Policy', icon: <FaClipboardCheck /> },
];

function AdminSettings() {
  const admin = {
    name: 'Admin User',
    role: 'Administrator',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: 'admin@email.com',
  };

  const [activeTab, setActiveTab] = useState('profile');
  const [email, setEmail] = useState(admin.email);
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(true);
  const [autoApprove, setAutoApprove] = useState(true);
  const [requireDoc, setRequireDoc] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved! (Demo only)');
  };

  return (
    <div className="admin-settings-dashboard-bg">
      <div className="admin-settings-dashboard-card">
        {/* Tab Bar */}
        <div className="admin-settings-dashboard-tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`admin-settings-dashboard-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
              aria-selected={activeTab === tab.key}
              aria-controls={`tab-panel-${tab.key}`}
              id={`tab-${tab.key}`}
              role="tab"
              tabIndex={activeTab === tab.key ? 0 : -1}
            >
              <span className="admin-settings-dashboard-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="admin-settings-dashboard-content">
          {activeTab === 'profile' && (
            <div className="admin-settings-dashboard-tab-content" id="tab-panel-profile" role="tabpanel" aria-labelledby="tab-profile">
              <AdminProfile name={admin.name} role={admin.role} avatar={admin.avatar} />
            </div>
          )}
          {activeTab === 'account' && (
            <form className="admin-settings-dashboard-form admin-settings-dashboard-tab-content" id="tab-panel-account" role="tabpanel" aria-labelledby="tab-account" onSubmit={handleSave}>
              <div className="admin-settings-dashboard-section-title"><FaEnvelope /> Account</div>
              <div className="admin-settings-dashboard-section-desc">Update your login credentials and keep your account secure.</div>
              <label htmlFor="admin-email">Email
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="admin@email.com"
                  title="Your admin email address"
                />
              </label>
              <label htmlFor="admin-password">New Password
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                  title="Enter a new password to change it"
                  autoComplete="off"
                />
              </label>
              <button type="submit" className="admin-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'notifications' && (
            <form className="admin-settings-dashboard-form admin-settings-dashboard-tab-content" id="tab-panel-notifications" role="tabpanel" aria-labelledby="tab-notifications" onSubmit={handleSave}>
              <div className="admin-settings-dashboard-section-title"><FaBell /> Notifications</div>
              <div className="admin-settings-dashboard-section-desc">Control how you receive important updates and alerts.</div>
              <label className="admin-settings-dashboard-switch-label" htmlFor="admin-notification-checkbox">
                <input
                  id="admin-notification-checkbox"
                  type="checkbox"
                  checked={notification}
                  onChange={e => setNotification(e.target.checked)}
                />
                <span className="admin-settings-dashboard-switch"></span>
                Enable Email Notifications
              </label>
              <button type="submit" className="admin-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'leave' && (
            <form className="admin-settings-dashboard-form admin-settings-dashboard-tab-content" id="tab-panel-leave" role="tabpanel" aria-labelledby="tab-leave" onSubmit={handleSave}>
              <div className="admin-settings-dashboard-section-title"><FaClipboardCheck /> Leave Policy</div>
              <div className="admin-settings-dashboard-section-desc">Customize how leave requests are handled for your team.</div>
              <label className="admin-settings-dashboard-switch-label" htmlFor="admin-auto-approve-checkbox">
                <input
                  id="admin-auto-approve-checkbox"
                  type="checkbox"
                  checked={autoApprove}
                  onChange={() => setAutoApprove(!autoApprove)}
                />
                <span className="admin-settings-dashboard-switch"></span>
                Auto-Approve Short Leaves
              </label>
              <div className="admin-settings-dashboard-desc">Automatically approve leaves with duration less than 2 days</div>
              <label className="admin-settings-dashboard-switch-label" htmlFor="admin-require-doc-checkbox">
                <input
                  id="admin-require-doc-checkbox"
                  type="checkbox"
                  checked={requireDoc}
                  onChange={() => setRequireDoc(!requireDoc)}
                />
                <span className="admin-settings-dashboard-switch"></span>
                Require Documentation
              </label>
              <div className="admin-settings-dashboard-desc">Mandatory attachment for sick leaves longer than 3 days</div>
              <button type="submit" className="admin-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
        </div>
        {/* Footer Info Block */}
        <div className="admin-settings-dashboard-footer-info">
          Last updated: June 2024 &nbsp;|&nbsp; <a href="#support" className="admin-settings-dashboard-support-link">Contact Support</a>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings; 