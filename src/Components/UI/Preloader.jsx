import React from 'react';
import preloader from '../../style/img/gif/preloader.gif';
export const Preloader = () => {
  return (
    <div className="preloaderContainer">
        <div className="preloaderContent">
            <img src={preloader}/>
        </div>
    </div>
  )
}