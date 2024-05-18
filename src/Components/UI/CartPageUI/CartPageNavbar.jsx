import React, { useContext } from 'react'
import { CustomInput } from '../CustomComponents/CustomInput'
import { CartContext } from '../../../Context/cartContext'
import { BackButton } from '../BackButton'
import { CustomSortPan } from '../CustomComponents/CustomSortPan'
import { cartPageSortOptions } from '../../../Assets/StaticData/cartPageSortOptions'

export const CartPageNavbar = ({filter,setFilter}) => {

const { cartData } = useContext(CartContext)

  return (
    <div className='cartPageNavbarConainer'>
      <div className="cartPageNavbarContent">
        <BackButton/>
        <CustomSortPan options={cartPageSortOptions} filter={filter} setFilter={setFilter}/>
        <div className="cartPageNavbarMainCartUI">
            <h2>{`Total Orders - ${cartData.length}`}</h2>
            <CustomInput 
                value={filter.searchQuery} 
                type={'text'} id={'searchInputCartPage'} 
                placeholder={'Search..'} 
                onChange={(e) => setFilter({...filter,searchQuery:e.target.value})}
            />
        </div>
      </div>
    </div>
  )
}