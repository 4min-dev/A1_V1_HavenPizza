import React from 'react'
import { AddProductQuantity } from './AddProductQuantity'
import { CustomButton } from '../../CustomComponents/CustomButton'

export const MainProductInteractionWithProduct = ({productQuantity,setProductQuantity,productData,setProductToCart}) => {
  return (
    <div className="interactionWithProductContainer">
            <div className="interactionWithProductContent">
            <AddProductQuantity productQuantity={productQuantity} setProductQuantity={setProductQuantity}/>
            <h3>{productQuantity}</h3>
            <CustomButton type={'button'} id={'selectProductCardButton'} buttonText={'Select'} handleClick={() => setProductToCart(productData)}/>
            </div>
    </div>
  )
}