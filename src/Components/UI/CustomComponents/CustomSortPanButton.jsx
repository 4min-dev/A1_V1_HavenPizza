import React from 'react'

export const CustomSortPanButton = ({sortPanIsOpen,setSortPanIsOpen,sortQuery}) => {
  return (
    <span className='sortPanCustomButton' onClick={() => setSortPanIsOpen(!sortPanIsOpen)}>
        <span className='sortPanButton'>Sort by <h3>{sortQuery}</h3></span>
    </span>
  )
}