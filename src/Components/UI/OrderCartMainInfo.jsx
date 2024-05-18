import React from 'react'
export const OrderCartMainInfo = ({orderData}) => {

  return (
    <>
     <div className="cartOrderListMainInfoAboutOrder">
            <h1>
                {!orderData.veg 
                ? `${orderData.name} - $${orderData.price} x ${orderData.quantity}` 
                : `${orderData.name + '🌱'} - $${orderData.price} x ${orderData.quantity}`}
            </h1>
            
            <div className="cartOrderListMainInfoAboutCustomizeProduct">
                {orderData.selectedProductOptions
                    ? orderData.selectedProductOptions.map((opt) => 
                        <h2 key={opt.name}>
                            {`${opt.name} - $${opt.price}`}
                        </h2>)
                    : <h2> - </h2>
                }
            </div>
            <h1>
                {`Total - $${orderData.totalPrice}`}
            </h1>
        </div>
        <div className="cartOrderListProductAvatarContainer">
            <div className="cartOrderListProductAvatarContent">
                <img className='productImg' src={orderData.img} alt={`product${orderData.id}logo`} draggable/>
            </div>
        </div>
    </>
  )
}