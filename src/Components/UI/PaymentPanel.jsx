import React from 'react'
import { PaymentPanelHeader } from './PaymentPanel/PaymentPanelHeader'
import { PaymentPanelSelectedOrders } from './PaymentPanel/PaymentPanelSelectedOrders'

import { PaymentPanelFooter } from './PaymentPanel/PaymentPanelFooter'
import { PaymentPanelValiableCardsToPay } from './PaymentPanel/PaymentPanelValiableCardsToPay'

export const PaymentPanel = ({cartData, selectedOrders, handleSelectAllCheckboxChange, allSelected}) => {
  return (
    <div className="cartPagePaymentPanel">
        <PaymentPanelHeader/>
        <PaymentPanelSelectedOrders selectedOrders={selectedOrders}/>
        <PaymentPanelValiableCardsToPay/>
        <PaymentPanelFooter cartData={cartData} selectedOrders={selectedOrders} handleSelectAllCheckboxChange={handleSelectAllCheckboxChange} allSelected={allSelected}/>
  </div>
  )
}