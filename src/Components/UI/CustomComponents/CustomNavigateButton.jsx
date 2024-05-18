import React from 'react'

export const CustomNavigateButton = ({disabled,type,className,buttonText,handleClick}) => {
  return (
    <button disabled={disabled} type={type} className={`customNavigateButton ${className}`} onClick={() => handleClick()}>
        {buttonText}
    </button>
  )
}