import React from 'react'
import { MainProductInteractionWithProduct } from './MainProductInteractionWithProduct'
export const MainProductPurchaseProductInfo = ({productData,productQuantity,setProductQuantity,setProductToCart}) => {
  return (
    <div className="mainPageProductCardUiWithProductContainer">
    <div className="mainPageProductCardUiWithProductContent">
        <h1>{`$${productData.price * productQuantity}`}</h1>
        <MainProductInteractionWithProduct productQuantity={productQuantity} setProductQuantity={setProductQuantity} productData={productData} setProductToCart={setProductToCart}/>
    </div>
  </div>
  )
}