import React from 'react';
import notFound from '../../style/img/Icon/notFound.png';
export const NotFound = () => {
  return (
    <div className="notFoundContainer">
        <div className="notFoundContent">
            <h1>{`Not found`}</h1>
            <img src={notFound}/>
        </div>
    </div>
  )
}