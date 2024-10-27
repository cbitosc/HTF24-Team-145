import React from 'react';
import '../styles/ItemListing.css';

function ItemListing() {
  return (
    <div className="item-listing">
      <h2>Artwork Listings</h2>
      <p>Post new artworks and set bidding times.</p>
      <button className="add-item-btn">Add New Item</button>
      <div className="item-grid">
        {/* Example item card */}
        <div className="item-card">
          <h3>Item Title</h3>
          <p>Bidding Ends: 24 hours</p>
        </div>
        {/* More items can be rendered here */}
      </div>
    </div>
  );
}

export default ItemListing;
