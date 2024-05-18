import React from 'react'
export const CartOrderList = ({children,id}) => {
  return (
    <div className='cartOrderList' id={id}>
       {children}
    </div>
  )
}