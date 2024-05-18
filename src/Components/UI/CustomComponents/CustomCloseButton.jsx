import React from 'react'

export const CustomCloseButton = ({setPopup,id}) => {
  return (
    <button type='button' onClick={() => setPopup(false)} id={id} className='customCloseButton'>
    X
    </button>
  )
}