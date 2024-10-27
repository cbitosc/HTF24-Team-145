// Commissions.js

import React from 'react';
import '../styles/Commissions.css';

function Commissions() {
    return (
        <div className="commissions">
            <h2>Commission Requests</h2>
            <p>Accept and manage custom art requests from buyers.</p>
            <div className="commission-container">
                <div className="commission-card">
                    <h3>Commission Title</h3>
                    <p>Description: Custom request details...</p>
                    <button className="preview-btn">Generate Preview</button>
                </div>
            </div>
        </div>
    );
}

export default Commissions;
