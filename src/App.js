import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Customer from './components/Customer';
import Warehouse from './components/Warehouse';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'customer':
        return <Customer />;
      case 'warehouse':
        return <Warehouse />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-2">
          <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>
        <div className="col-md-10">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
