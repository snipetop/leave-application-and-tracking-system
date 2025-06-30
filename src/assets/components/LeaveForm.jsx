import React, { useState } from 'react';
import './LeaveForm.css';

function LeaveForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    }
    setForm({ name: '', leaveType: '', startDate: '', endDate: '', reason: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="leave-form">
      <div className="form-inner">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Leave Type</label>
            <select
              name="leaveType"
              value={form.leaveType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select type</option>
              <option value="Sick">Sick</option>
              <option value="Casual">Casual</option>
              <option value="Earned">Earned</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>
        <button
          type="submit"
          className="form-button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default LeaveForm;
