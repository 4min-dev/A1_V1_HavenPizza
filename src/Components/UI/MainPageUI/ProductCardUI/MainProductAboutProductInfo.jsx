import React from 'react'

export const MainProductAboutProductInfo = ({productData}) => {
  return (
    <div className="mainPageProductCardInfoAboutProductContainer">
    <div className="mainPageProductCardInfoAboutProductContent">
        <h1>{!productData.veg ? productData.name : productData.name + '🌱'}</h1>
        <h2>{productData.description}</h2>
    </div>
  </div>
  )
}