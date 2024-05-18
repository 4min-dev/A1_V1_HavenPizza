import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/cartContext'
import { IsCartEmptyUI } from './CartPopupUI/IsCartEmptyUI'
import { CartOrderList } from './Card-list/CartOrderList'
import { CustomCloseButton } from './CustomComponents/CustomCloseButton'
import { Link } from 'react-router-dom'
import { OrderCartMainInfo } from './OrderCartMainInfo'
import { CustomMoreContentButton } from './CustomComponents/CustomMoreContentButton'

export const CartPopup = ({setCartPopupOpen}) => {

const { cartData } = useContext(CartContext)


let [paginateCards,setPaginateCards] = useState({limit:10,xTotalCount:cartData.length})
let perCardIndex = 1 * paginateCards.limit
let firstCardIndex = perCardIndex - paginateCards.limit

const paginatedCards = cartData.slice(firstCardIndex,perCardIndex)

  return (
    <div className='cartContainer' onClick={() => setCartPopupOpen(false)}>
      <div className="cartContent">
      <CustomCloseButton setPopup={setCartPopupOpen} id={'cartCloseButton'}/>
        <div className="cartPopup"  onClick={(e) => e.stopPropagation()}>
            <h1>Cart</h1>
            {!paginatedCards.length
            ? <IsCartEmptyUI/>
            : <div className="cartOrderListContainer">
                {paginatedCards.map((el) => 
                <CartOrderList key={el.idProductCart} id={'cartPopupOrderList'}>
                  <OrderCartMainInfo orderData={el}/>
                </CartOrderList>)}
                {paginateCards.limit < paginateCards.xTotalCount 
                && <CustomMoreContentButton paginateCards={paginateCards} setPaginateCards={setPaginateCards}/>}
                <Link to={'/pizza-heaven/main/cart'}>Go cart</Link>
              </div>
            }
        </div>
      </div>
    </div>
  )
}