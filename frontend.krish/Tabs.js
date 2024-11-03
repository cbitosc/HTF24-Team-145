import React from 'react';
import '../styles/Tabs.css';

function Tabs({ currentTab, setTab }) {
  const tabLabels = ["Items", "Commissions", "Workshops", "Consultations"];

  return (
    <div className="tabs">
      {tabLabels.map((label, index) => (
        <button
          key={index}
          className={currentTab === label.toLowerCase() ? "active-tab" : ""}
          onClick={() => setTab(label.toLowerCase())}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;