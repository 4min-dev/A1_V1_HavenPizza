import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/cartContext';

export const OrderCartMainUIButtons = ({ id, orderData, cartData, filteredCards, currPage, setCurrPage, selectOrderToPayment }) => {

  const { removeOrder } = useContext(CartContext);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    orderData.isOrderSelect = isChecked;
    selectOrderToPayment(orderData);
  };



  return (
    <form className='mainUIButtonForm'>
      <button disabled={orderData.isOrderSelect} type='button' onClick={() => {
        if (cartData.length && filteredCards.length <= 1 && currPage !== 1) {
          setCurrPage(currPage - 1);
        }
        removeOrder(orderData.idProductCart);
      }}>Remove</button>
      <label htmlFor={id}>Select</label>
      <input
        checked={orderData.isOrderSelect}
        type='checkbox'
        id={id}
        onChange={handleCheckboxChange}
      />
    </form>
  );
};
