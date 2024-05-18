import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../Components/UI/Header';
import { ProductsAPIContext } from '../Context/productsAPIContext';
import { ErrorMessage } from '../Components/UI/ErrorMessage';
import { Preloader } from '../Components/UI/Preloader';
import { MainPageProductList } from '../Components/UI/Card-list/MainPageProductList';
import { NotDefined } from '../Components/UI/NotDefined';
import { MainPageNavbar } from '../Components/UI/MainPageUI/MainPageNavbar';
import { paginateButtonsMath } from '../Pagination/Utils/paginateButtonsMath';
import { PaginateButtons } from '../Pagination/UI/PaginateButtons';
import { useFilterCards } from '../Hooks/useFilterCards';
import { CartPopup } from '../Components/UI/CartPopup';
import { HeaderCartButton } from '../Components/UI/HeaderCartButton';
import { HeaderMainUI } from '../Components/UI/HeaderMainUI';
export const MainPage = () => {
  
let [filter,setFilter] = useState({sortQuery:'',searchQuery:''})
let [categoryFilter,setCategoryFilter] = useState(null)

let [isCartPopupOpen,setCartPopupOpen] = useState(false)

let [currPage,setCurrPage] = useState(1)
let [totalPaginateButtons,setTotalPaginateButtons] = useState(null)


const { errorMessage,isProductsLoading,productData } = useContext(ProductsAPIContext)

const limitCardsInPage = 10
const perCardIndex = currPage * limitCardsInPage
const firstCardIndex = perCardIndex - limitCardsInPage

const paginatedCards = productData.slice(firstCardIndex,perCardIndex)
const filteredCards = useFilterCards(filter.sortQuery,filter.searchQuery,paginatedCards,categoryFilter)

useEffect(() => {
  setTotalPaginateButtons(paginateButtonsMath(productData.length,limitCardsInPage))
},[currPage,productData])
  return (
    <>
    {isCartPopupOpen && <CartPopup setCartPopupOpen={setCartPopupOpen}/>}
      <Header>
        <HeaderMainUI/>
        <HeaderCartButton setCartPopupOpen={setCartPopupOpen}/>
      </Header>
      {isProductsLoading 
      ? <Preloader/> 
      : 
      <>
        { errorMessage 
        ? <ErrorMessage errorMessage={errorMessage}/> 
        : 
        <div className='mainPageContainer'>
        <MainPageNavbar filter={filter} setFilter={setFilter} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}/>
       { filteredCards.length > 0 
          ?
          <>
           <div className="mainPageContent">
              {filteredCards.map((el) => <MainPageProductList productData={el} key={el.id}/>) }
            </div>
          <PaginateButtons totalCardsLength={totalPaginateButtons} currPage={currPage} setCurrPage={setCurrPage}/>
          </>
          : <NotDefined/>
          }
          
        </div>
        }
      </>}
    </>
  )
}