import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/UI/Header'
import { CartPageNavbar } from '../Components/UI/CartPageUI/CartPageNavbar'
import { CartContext } from '../Context/cartContext'
import { IsCartEmptyUI } from '../Components/UI/CartPopupUI/IsCartEmptyUI'
import { CartOrderList } from '../Components/UI/Card-list/CartOrderList'
import { OrderCartMainInfo } from '../Components/UI/OrderCartMainInfo'
import { OrderCartMainUIButtons } from '../Components/UI/OrderCartMainUIButtons'
import { paginateButtonsMath } from '../Pagination/Utils/paginateButtonsMath'
import { useFilterCards } from '../Hooks/useFilterCards'
import { PaginateButtons } from '../Pagination/UI/PaginateButtons'
import { CartPagePaymentPanel } from '../Components/UI/CartPageUI/CartPagePaymentPanel'
export const CartPage = () => {

const { cartData, setCartData, removeSelectedOrders } = useContext(CartContext)

const { selectedOrders, setSelectedOrders } = useContext(CartContext)


let [filter,setFilter] = useState({sortQuery:'',searchQuery:''})
let [currPage,setCurrPage] = useState(1)
let [totalPaginateButtons,setTotalPaginateButtons] = useState(null)

const selectOrderToPayment = (order) => {
    if(!order.isOrderSelect) {
        setSelectedOrders(selectedOrders.filter((el) => el.idProductCart !== order.idProductCart))
    } else {
        setSelectedOrders([...selectedOrders,{...order}])
    }
}

const limitCardsInPage = 10
const perCardIndex = currPage * limitCardsInPage
const firstCardIndex = perCardIndex - limitCardsInPage

const paginatedCards = cartData.slice(firstCardIndex,perCardIndex)
const filteredCards = useFilterCards(filter.sortQuery,filter.searchQuery,paginatedCards)

useEffect(() => {
    setTotalPaginateButtons(paginateButtonsMath(cartData.length,limitCardsInPage))
},[currPage,cartData])

  return (
   <>
    <Header>
        <ul>
            <li>
                <h1>Cart</h1>
            </li>
        </ul>
    </Header>
    <CartPageNavbar filter={filter} setFilter={setFilter}/>
    {!filteredCards.length
    ? <IsCartEmptyUI/>
    : <div className="cartPageOrderListContainer">
        {filteredCards.map((el) => 
        <CartOrderList key={el.idProductCart} id={'cartOrderList'}>
            <OrderCartMainInfo orderData={el}/>
            <OrderCartMainUIButtons id={`mainUIButtonFormSelectOrder_${el.idProductCart}`} orderData={el} cartData={cartData} filteredCards={filteredCards} currPage={currPage} setCurrPage={setCurrPage} selectOrderToPayment={selectOrderToPayment}/>
        </CartOrderList>)}
    </div>
    }
    {cartData.length >= limitCardsInPage && <PaginateButtons totalCardsLength={totalPaginateButtons} currPage={currPage} setCurrPage={setCurrPage} containerId={'paginateButtonsCartPageContainer'}/>}
    <CartPagePaymentPanel filteredCards={filteredCards} currPage={currPage} setCurrPage={setCurrPage} cartData={cartData} setCartData={setCartData} selectedOrders={selectedOrders} setSelectedOrders={setSelectedOrders} removeSelectedOrders={removeSelectedOrders}/>
   </>
  )
}