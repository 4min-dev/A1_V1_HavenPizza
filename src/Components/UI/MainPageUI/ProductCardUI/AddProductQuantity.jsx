import React from 'react'

export const AddProductQuantity = ({productQuantity,setProductQuantity}) => {
  return (
    <div className='addProductQuantity'>
    <button disabled={productQuantity === 1} type='button' className='addProductQuantityButton' id='addProductQuantityButtonLess' onClick={() => setProductQuantity(prev => prev - 1)}>-</button>
    <button disabled={productQuantity === 10} type='button' className='addProductQuantityButton' id='addProductQuantityButtonMore' onClick={() => setProductQuantity(prev => prev + 1)}>+</button>
    </div>
  )
}