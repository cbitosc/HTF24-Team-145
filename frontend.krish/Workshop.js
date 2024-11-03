import React from 'react';
import '../styles/Workshops.css';

function Workshops() {
  return (
    <div className="workshops">
      <h2>Manage Workshops</h2>
      <p>Set workshop times and available slots.</p>
      <button className="add-workshop-btn">Add Workshop</button>
      <div className="workshop-list">
        {/* Render workshop items here */}
        <div className="workshop-item">
          <h3>Workshop Title</h3>
          <p>Available Slots: 10</p>
          <button className="manage-btn">Manage</button>
        </div>
      </div>
    </div>
  );
}

export default Workshops;