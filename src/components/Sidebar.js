import React from 'react';

const Sidebar = ({ activeTab, handleTabClick }) => {
  return (
    <ul className="nav nav-tabs flex-row">
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabClick('dashboard')}>Dashboard</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'customer' ? 'active' : ''}`} onClick={() => handleTabClick('customer')}>Customer</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'warehouse' ? 'active' : ''}`} onClick={() => handleTabClick('warehouse')}>Warehouse</a>
      </li>
    </ul>
  );
};

export default Sidebar;
