import React from 'react'
import isCartEmptyIcon from '../../../style/img/Icon/isCartEmptyIcon.png'
export const IsCartEmptyUI = () => {
  return (
    <div className="isCartEmptyUIContainer">
        <div className='isCartEmptyUIContent'>
            <h2>No items</h2>
            <a href='/pizza-heaven/main'><h2>Go shopping..</h2></a>
            <img src={isCartEmptyIcon} alt='isCartEmptyLogo'/>
        </div>
    </div>
  )
}