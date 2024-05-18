import React, { useEffect, useState } from 'react';
import './style/main.css';
import { RouterProvider } from "react-router-dom";
import { routerElements } from './Assets/Router/routerElements';
import { ProductsAPIContext } from './Context/productsAPIContext';
import { productDataFetchError } from './Assets/FetchError/productDataFetchError';
import { CartContext } from './Context/cartContext';
import { ContactWithUsPopup } from './Components/UI/ContactWithUsPopup';
import { MainAppContext } from './Context/mainAppContext';
export const App = () => {

let [hasContactWithUsPopupIsActive,setContactIsActive] = useState(false)

let [productData,setProductData] = useState([])
let [cartData,setCartData] = useState([])
let [selectedOrders,setSelectedOrders] = useState([])
let [errorMessage,setErrorMessage] = useState('')
let [isProductsLoading,setLoading] = useState(true)
    const router = routerElements

const addOrderToCart = (orderInfo) => {
    setCartData([...cartData,{...orderInfo,isOrderSelect:false}])
    console.log(cartData)
}

const removeOrder = (orderId) => {
  setCartData(cartData.filter((el) => el.idProductCart !== orderId))
}

useEffect(() => {
  productDataFetchError(setErrorMessage,setLoading,setProductData)
},[])

  return (
  <MainAppContext.Provider value={{
    isContactPopupActive:hasContactWithUsPopupIsActive,
    setContactIsActive
  }}>
      <CartContext.Provider value={{
        cartData,
        setCartData,
        addOrderToCart,
        removeOrder,
        selectedOrders,
        setSelectedOrders
    }}>
  <ProductsAPIContext.Provider value={{
        errorMessage,
        isProductsLoading,
        productData
    }}>
       <React.StrictMode>
              <RouterProvider router={router}/>
             {hasContactWithUsPopupIsActive && <ContactWithUsPopup setContactIsActive={setContactIsActive}/>}
          </React.StrictMode>
        </ProductsAPIContext.Provider>
      </CartContext.Provider>
  </MainAppContext.Provider>
   
   
  )
}