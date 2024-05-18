import React, { useContext } from 'react'
import hCartButtonIcon from '../../style/img/Icon/hCartButtonIcon.png'
import { CartContext } from '../../Context/cartContext'
export const HeaderCartButton = ({setCartPopupOpen}) => {

const { cartData } = useContext(CartContext)

  return (
        <div className="hCartContainer">
            <div className="hCartContent">
                <button type='button' onClick={() => setCartPopupOpen(true)}>
                    <img src={hCartButtonIcon}/>
                </button>
                <div className='hCartContentInfoAboutOrders'>
                {!cartData.length 
                ? <h2>Cart is empty</h2>
                : 
                    <>
                    <h2>{`${cartData.length} - Total orders`}</h2>
                    <h2> {
                     `$${cartData.reduce((total,cartData) => {
                         return total + cartData.totalPrice
                     },0)} - Total price`
                    }</h2>
                    </>}
                </div>
            </div>
        </div>
  )
}