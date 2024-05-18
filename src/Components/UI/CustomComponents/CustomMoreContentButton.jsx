import React from 'react'

export const CustomMoreContentButton = ({paginateCards,setPaginateCards}) => {
  return (
    <button type='button' onClick={() => setPaginateCards({...paginateCards,limit:paginateCards.limit + 10})} className={'moreContentButton'}>More</button>
  )
}