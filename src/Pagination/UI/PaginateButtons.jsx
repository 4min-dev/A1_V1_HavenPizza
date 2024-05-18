import React from 'react'
import { CustomNavigateButton } from '../../Components/UI/CustomComponents/CustomNavigateButton'
import { usePaginate } from '../Utils/Hooks/usePaginate'

export const PaginateButtons = ({totalCardsLength,currPage,setCurrPage,containerId}) => {
    const totalArray = usePaginate(totalCardsLength,currPage)
  return (
    <div className='paginateButtonsContainer' id={containerId}>
      <div className="paginateButtonsContent">
        {totalArray.length > 0 && totalArray.map((bNumber) => 
        <CustomNavigateButton 
            key={bNumber}
            disabled={currPage == bNumber}
            type={'button'} 
            className={`customNavigateButton ${currPage == bNumber && 'customNavigateButtonActive'}`} 
            buttonText={bNumber} 
            handleClick={() => setCurrPage(bNumber)}
        />)}
      </div>
    </div>
  )
}
