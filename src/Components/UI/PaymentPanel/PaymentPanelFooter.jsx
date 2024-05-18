import React from 'react'
import { CartPagePaymentPanelFooterMainUIButtons } from './CartPagePaymentPanelFooterMainUIButtons'
import { CartPagePaymentPanelMainPaymentInfo } from './CartPagePaymentPanelMainPaymentInfo'

export const PaymentPanelFooter = ({cartData, selectedOrders, handleSelectAllCheckboxChange, allSelected}) => {
  return (
    <div className="cartPagePaymentPanelFooterContent">
      <form className='cartPagePaymentPanelFooterForm'>
        <CartPagePaymentPanelFooterMainUIButtons cartData={cartData} handleSelectAllCheckboxChange={handleSelectAllCheckboxChange} allSelected={allSelected}/>
      </form>
      <CartPagePaymentPanelMainPaymentInfo selectedOrders={selectedOrders}/>
    </div>
  )
}
