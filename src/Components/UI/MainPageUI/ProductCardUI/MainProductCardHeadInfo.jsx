import React from 'react'
export const MainProductCardHeadInfo = ({productData}) => {
  return (
    <div className="mainPageProductCardLogoInfoContainer">
        <div className="mainPageProductCardLogoInfoContent">
            <img className='productImg' src={productData.img} alt={`product${productData.id}logo`} draggable/>
        </div>
      </div>
  )
}