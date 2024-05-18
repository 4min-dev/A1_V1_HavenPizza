import React from 'react';
import didntDefined from '../../style/img/Icon/didntDefined.png';
export const NotDefined = () => {
  return (
    <div className="notDefinedContainer">
        <div className="notDefinedContent">
            <h1>{`Didn't defined :(`}</h1>
            <img src={didntDefined}/>
        </div>
    </div>
  )
}