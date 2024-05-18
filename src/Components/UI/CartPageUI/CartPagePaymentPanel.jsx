import React, { useEffect, useState } from 'react';
import { PaymentPanel } from '../PaymentPanel';

export const CartPagePaymentPanel = ({ cartData, setCartData, selectedOrders,setSelectedOrders }) => {
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAllCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const updatedCartData = cartData.map((item) => ({
      ...item,
      isOrderSelect: isChecked,
    }));
    setCartData(updatedCartData)
    if(!isChecked) {
      setSelectedOrders([])
    } else {
      setSelectedOrders(cartData)
    }
  };

  useEffect(() => {
    if(cartData.some((el) => !el.isOrderSelect)) {
      setAllSelected(false)
    } else {
      setAllSelected(true)
    }
  },[selectedOrders])

  return (
    <div className='cartPagePaymentPanelContainer'>
      <div className="cartPagePaymentPanelContent">
       <PaymentPanel cartData={cartData} selectedOrders={selectedOrders} handleSelectAllCheckboxChange={handleSelectAllCheckboxChange} allSelected={allSelected}/>
      </div>
    </div>
  );
};
