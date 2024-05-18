import React from 'react'

export const CustomButton = ({type,id,buttonText,handleClick}) => {
  return (
    <button type={type} className='customButton' id={id} onClick={() => handleClick()}>
        <h1>{buttonText}</h1>
    </button>
  )
}

// id props in this component need to customise that component for various page's, customButton - global classname, stores inside self
// default style's.