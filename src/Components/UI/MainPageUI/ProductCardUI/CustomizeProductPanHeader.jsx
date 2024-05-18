import React from 'react'
import { CustomCloseButton } from '../../CustomComponents/CustomCloseButton'

export const CustomizeProductPanHeader = ({setProductCrustOpen}) => {
  return (
    <div className='customizeProductPanHeaderContainer'>
      <div className="customizeProductPanHeaderContent">
        <h1>Improve it!</h1>
        <CustomCloseButton setPopup={setProductCrustOpen} id={'customizeProductPanHeaderCloseButton'}/>
      </div>
    </div>
  )
}