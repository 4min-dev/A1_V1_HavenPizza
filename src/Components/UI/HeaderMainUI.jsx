import React, { useContext } from 'react'
import pizzaHavenWebsiteLogo from '../../style/img/logo/pizzaHavenWebsiteLogo.png'
import { MainAppContext } from '../../Context/mainAppContext'
export const HeaderMainUI = () => {

const { setContactIsActive } = useContext(MainAppContext)

  return (
    <>
    <div className="hWebsiteLogoContainer">
        <div className="hWebsiteLogoContent">
            <img src={pizzaHavenWebsiteLogo} alt='pizzaHavenWebsiteLogo'/>
            <h1>Pizza-Haven</h1>
        </div>
    </div>
    <ul>
        <li>
            <a href="/">
                <h2>Home</h2>
            </a>
        </li>
        <li>
            <a href="/pizza-heaven/main">
                <h2>Main</h2>
            </a>
        </li>
        <li onClick={() => setContactIsActive(true)}>
                <h2>Contact with us</h2>
        </li>
    </ul>
    </>
  )
}