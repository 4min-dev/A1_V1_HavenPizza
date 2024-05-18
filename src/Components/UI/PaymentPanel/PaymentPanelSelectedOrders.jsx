import React from 'react'

export const PaymentPanelSelectedOrders = ({selectedOrders}) => {
  return (
    <div className="cartPagePaymentPanelSelectedOrdersInfo">
      <h1>Orders</h1>
      {!selectedOrders.length 
        ? <h2>-</h2>
        : selectedOrders.map((order) => <h2 key={order.idProductCart}>{`${order.name} ($${order.totalPrice})`} </h2>)}
    </div>
  )
}