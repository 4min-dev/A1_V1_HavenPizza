import React from 'react'

export const SizeAndCrustList = ({customizeElement,selectedProductOptions,addNewOptionToProduct}) => {
  return (
    <button type='button' className={ 
        selectedProductOptions.some((el) => el.name === customizeElement.name) 
         ? 'sizeAndCrustList sizeAndCrustListActive'
    
         : 'sizeAndCrustList' }
     onClick={() => addNewOptionToProduct(customizeElement)}>
      <h3>{`${customizeElement.name} — $${customizeElement.price}`}</h3>
    </button>
  )
}