// Consultations.js

import React from 'react';
import '../styles/Consultations.css';

function Consultations() {
    return (
        <div className="consultations">
            <h2>Consultation Bookings</h2>
            <p>Manage available times and view appointments.</p>
            <button className="add-slot-btn">Add New Slot</button>
            <div className="consultation-list">
                {/* Render consultation items here */}
                <div className="consultation-item">
                    <h3>Consultation with Buyer</h3>
                    <p>Time: 10:00 AM - 11:00 AM</p>
                </div>
            </div>
        </div>
    );
}

export default Consultations;
