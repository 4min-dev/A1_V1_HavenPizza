import React from 'react';
import { Header } from '../Components/UI/Header';
import { LandingPageMainContent } from '../Components/UI/LandingUI/LandingPageMainContent.jsx';
import { HeaderMainUI } from '../Components/UI/HeaderMainUI.jsx';

export const HomePage = () => {
  return (
    <>
      <Header>
        <HeaderMainUI/>
      </Header>
      <LandingPageMainContent/>
    </>
  )
}