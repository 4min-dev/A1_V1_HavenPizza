import React from 'react';
import someErrorIcon from '../../style/img/Icon/someErrorIcon.png';
import { CustomButton } from './CustomComponents/CustomButton';
export const ErrorMessage = ({errorMessage}) => {
  return (
    <div className="errorMessageContainer">
        <div className='errorMessageContent'>
        <h1>{errorMessage}</h1>
        <a href='/'><h2>Home page</h2></a>
        <img src={someErrorIcon} alt='errorIcon'/>
        <CustomButton type={'button'} id={'refreshButtonBeforeError'} buttonText={'Refresh'} handleClick={() => window.location.reload()}/>
        </div>
    </div>
  )
}