import React, { useState } from 'react'
import { CustomizeProductPanHeader } from './CustomizeProductPanHeader'
import { CustomizeProductPanMainUI } from './CustomizeProductPanMainUI'
import { SizeAndCrustPan } from './SizeAndCrustPan'
import { CustomizeProductPanAdditionalProductInfo } from './CustomizeProductPanAdditionalProductInfo'

export const CustomizeProductPan = ({productData,setProductCrustOpen}) => {
    let [selectedProductOptions,setSelectedProductOptions] = useState([])
    const addNewOptionToProduct = (option) => {
       if(selectedProductOptions.some((el) => el.name === option.name)) {
        setSelectedProductOptions(selectedProductOptions.filter((el) => el.name !== option.name))
       } else {
        setSelectedProductOptions([...selectedProductOptions,{...option}])
       }
    }

  return (
    <div className='customizeProductPanContainer'>
      <div className="customizeProductPanContent">
        <CustomizeProductPanHeader setProductCrustOpen={setProductCrustOpen}/>
        <CustomizeProductPanMainUI productData={productData} selectedProductOptions={selectedProductOptions} setProductCrustOpen={setProductCrustOpen}/>
        <CustomizeProductPanAdditionalProductInfo selectedProductOptions={selectedProductOptions} productData={productData}/>
        <SizeAndCrustPan sizeAndCrust={productData.sizeandcrust} selectedProductOptions={selectedProductOptions} addNewOptionToProduct={addNewOptionToProduct}/>
      </div>
    </div>
  )
}