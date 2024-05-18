import React from 'react'

export const CartPagePaymentPanelMainPaymentInfo = ({selectedOrders}) => {
  return (
    <div className="cartPagePaymentPanelMainInfoAboutOrders">
        <h1>Total price</h1>
        <h2>{`$${selectedOrders.reduce((total, order) => total + order.totalPrice, 0)}`}</h2>
        <button disabled={!selectedOrders.length} type='button'>Payment</button>
  </div>
  )
}