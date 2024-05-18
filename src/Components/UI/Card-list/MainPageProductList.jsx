import React, { useContext, useEffect, useState } from 'react';
import { MainProductCardHeadInfo } from '../MainPageUI/ProductCardUI/MainProductCardHeadInfo';
import { MainProductAboutProductInfo } from '../MainPageUI/ProductCardUI/MainProductAboutProductInfo';
import { MainProductPurchaseProductInfo } from '../MainPageUI/ProductCardUI/MainProductPurchaseProductInfo';
import { CustomizeProductPan } from '../MainPageUI/ProductCardUI/CustomizeProductPan';
import { CartContext } from '../../../Context/cartContext';
export const MainPageProductList = ({productData}) => {
  let [hasProductCrustPopupOpen,setProductCrustOpen] = useState(false)
  let [productQuantity,setProductQuantity] = useState(productData.quantity)

const { addOrderToCart } = useContext(CartContext)

const setProductToCart = (addedProductInfo) => {
  if(!addedProductInfo.sizeandcrust) {
    const order = {
      ...productData,
        totalPrice:productData.price * productData.quantity,
        idProductCart:new Date().getTime()
    }
    addOrderToCart(order)
  } else {
    setProductCrustOpen(true)
  }
  
}

useEffect(() => {
  productData.quantity = productQuantity
},[productQuantity])

  return (
    <div className='mainPageProductCard'>
      {hasProductCrustPopupOpen 
      && <CustomizeProductPan productData={productData} setProductCrustOpen={setProductCrustOpen}/>}
      <MainProductCardHeadInfo productData={productData}/>
      <MainProductAboutProductInfo productData={productData}/>
      <MainProductPurchaseProductInfo productData={productData} productQuantity={productQuantity} setProductQuantity={setProductQuantity} setProductToCart={setProductToCart}/>
    </div>
  )
}