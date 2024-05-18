import React from 'react'

export const CustomizeProductPanAdditionalProductInfo = ({selectedProductOptions,productData}) => {
  return (
    <span className='additionalProductInfo'>
        <h4>
            {!selectedProductOptions.length 
            ? `${productData.name } x ${productData.quantity}`
            : `${productData.name } x ${productData.quantity} + ${selectedProductOptions.map((el) => el.name)}`}
        </h4>
    </span>
  )
}