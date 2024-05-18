import React, { useContext } from 'react'
import addProductToCart from '../../../../style/img/Icon/addProductToCart.png'
import { CartContext } from '../../../../Context/cartContext'
export const CustomizeProductPanMainUI = ({productData,selectedProductOptions,setProductCrustOpen}) => {

const { addOrderToCart } = useContext(CartContext)

  return (
    <div className='customizeProductPanMainUIContainer'>
      <div className="customizeProductPanMainUIContent">
        <h1>{`$${!selectedProductOptions.length 
        ? productData.price * productData.quantity
        : selectedProductOptions.reduce((total,opt) => {
           return total + opt.price
        },productData.price * productData.quantity)}`}</h1>
        <button type='button' className='addToCartSizeAndCrustButton' onClick={() => {
         addOrderToCart({
            ...productData,
            idProductCart:new Date().getTime(),
            selectedProductOptions,
            totalPrice:productData.quantity
            * productData.price 
            + selectedProductOptions.reduce((total,arr) => {
             return total + arr.price
            },0)
          })
          setProductCrustOpen(false)
        }}>
            <img src={addProductToCart} alt='addProductToCart'/>
        </button>
      </div>
    </div>
  )
}