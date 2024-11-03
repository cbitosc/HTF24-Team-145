import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import ItemListing from '../components/ItemListing';
import Commissions from '../components/Commissions';
import Workshops from '../components/Workshops';
import Consultations from '../components/Consultations';

function SellerDashboard() {
  const [currentTab, setTab] = useState('items');

  const renderTabContent = () => {
    switch (currentTab) {
      case 'items':
        return <ItemListing />;
      case 'commissions':
        return <Commissions />;
      case 'workshops':
        return <Workshops />;
      case 'consultations':
        return <Consultations />;
      default:
        return <ItemListing />;
    }
  };

  return (
    <div className="seller-dashboard">
      <Tabs currentTab={currentTab} setTab={setTab} />
      {renderTabContent()}
    </div>
  );
}

export default SellerDashboard;