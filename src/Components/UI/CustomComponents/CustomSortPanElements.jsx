import React from 'react'

export const CustomSortPanElements = ({sortOption,filter,setFilter,setSortPanIsOpen}) => {
  return (
    <div className="sortPanContent">
     <button disabled={filter.sortQuery == sortOption.value} className='sortPanElement' onClick={() => {
      setFilter({...filter,sortQuery:sortOption.value})
      setSortPanIsOpen(false)
    }}>{sortOption.name}
     </button>
    </div>
  )
}