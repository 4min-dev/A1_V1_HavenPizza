import React from 'react';
import { CustomButton } from '../CustomComponents/CustomButton';
import landingPageMainLogo from '../../../style/img/logo/landingPageMainLogo.png';
export const LandingPageMainContent = () => {
  return (
    <div className="landingPageMainContainer">
      <div className='landingPageMainContent'>
        <div className="landingMainTextContent">
          <h1> Welcome to Pizza Haven! </h1>
          <h1> Welcome to our slice of pizza paradise! We're here to deliver mouthwatering pizzas straight to your door. With the freshest ingredients and irresistible flavors, every bite is a taste sensation. </h1>
          <h1> Hungry? Don't wait! Click below to order now and experience pizza perfection in every slice. Satisfaction guaranteed! </h1>
        </div>
      <CustomButton type='button' id='landingButton' buttonText={'Order Now!'} handleClick={() => window.location.href = '/pizza-heaven/main'}/>
      <img src={landingPageMainLogo} alt='landingPageMainLogo'/>
      </div>
  </div>
  )
}
