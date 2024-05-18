import React, { useState } from 'react'
import { CustomSortPanButton } from './CustomSortPanButton'
import { CustomSortPanElements } from './CustomSortPanElements'

export const CustomSortPan = ({options,filter,setFilter}) => {
    let [sortPanIsOpen,setSortPanIsOpen] = useState(false)
  return (
        <div className="sortPanPopupWrapper">
            <CustomSortPanButton sortPanIsOpen={sortPanIsOpen} setSortPanIsOpen={setSortPanIsOpen} sortQuery={filter.sortQuery}/>
                {sortPanIsOpen &&
                 options.map((sortOption) => <CustomSortPanElements key={sortOption.value} sortOption={sortOption} filter={filter} setFilter={setFilter} setSortPanIsOpen={setSortPanIsOpen}/> )
                }
        </div>
  )
}