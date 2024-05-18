import React from 'react'
import { valiableCardsData } from '../../../Assets/StaticData/valiableCardsData'
export const PaymentPanelValiableCardsToPay = () => {
  return (
    <div className="cartPagePaymentPanelValiableToPaymentCards">
        {!valiableCardsData.length ? '-' : valiableCardsData.map((card) => <img key={card.name} src={card.img} alt={`card_${card.name}`}/>)}
    </div>
  )
}