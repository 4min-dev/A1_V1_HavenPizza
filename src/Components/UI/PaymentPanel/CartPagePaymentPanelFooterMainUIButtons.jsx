import React from 'react'

export const CartPagePaymentPanelFooterMainUIButtons = ({cartData,handleSelectAllCheckboxChange,allSelected}) => {
  return (
    <div className="cartPagePaymentPanelFooterFormSelectAllCheckbox">
          <label htmlFor='paymentPanCheckbox'>{`All (${cartData.filter((el) => !el.isOrderSelect).length})`}</label>
          <input 
            type='checkbox' 
            id='paymentPanCheckbox' 
            onChange={handleSelectAllCheckboxChange}
            checked={allSelected}
          />
    </div>
  )
}