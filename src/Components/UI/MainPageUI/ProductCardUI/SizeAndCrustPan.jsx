import React from 'react'
import { SizeAndCrustList } from '../../Card-list/SizeAndCrustList'

export const SizeAndCrustPan = ({sizeAndCrust,selectedProductOptions,addNewOptionToProduct}) => {
  return (
    <div className='sizeAndCrustPanContainer'>
      <div className="sizeAndCrustPanContent">
        <h1>Size and crust</h1>
        {sizeAndCrust && sizeAndCrust.map((el) => 
            <SizeAndCrustList key={el.name} customizeElement={el} selectedProductOptions={selectedProductOptions} addNewOptionToProduct={addNewOptionToProduct}/>)}
      </div>
    </div>
  )
}