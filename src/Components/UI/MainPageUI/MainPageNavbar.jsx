import React from 'react';
import { CustomNavigateButton } from '../CustomComponents/CustomNavigateButton';
import { CustomInput } from '../CustomComponents/CustomInput';
import { CustomSortPan } from '../CustomComponents/CustomSortPan';
import { sortOptionsData } from '../../../Assets/StaticData/sortOptionsData';
import { categoryOptionsData } from '../../../Assets/StaticData/categoryOptionsData';

export const MainPageNavbar = ({filter,setFilter,categoryFilter,setCategoryFilter}) => {
  return (
    <form className='mainPageNavbar'>
        {categoryOptionsData.map((opt) => <CustomNavigateButton key={opt.value} type={'button'} className={`${categoryFilter === opt.value ? 'customNavigateButtonMainPageActive' : 'customNavigateButtonMainPage'}`} buttonText={opt.name} handleClick={() => setCategoryFilter(opt.value)}/>)}
        <CustomInput value={filter.searchQuery} type={'text'} id={'searchInputMainPage'} placeholder={'Search..'} onChange={(e) => setFilter({...filter,searchQuery:e.target.value})}/>
        <CustomSortPan options={sortOptionsData} filter={filter} setFilter={setFilter}/>
    </form>
  )
}