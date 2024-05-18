import React from 'react'
import { socialNetworksData } from '../../Assets/StaticData/socialNetworksData'
import { CustomCloseButton } from './CustomComponents/CustomCloseButton'
export const ContactWithUsPopup = ({setContactIsActive}) => {
  return (
    <div className='contactWithUsPopupContainer' onClick={() => setContactIsActive(false)}>
      <div className="contactWithUsPopupContent">
        <div className="contactWithUsPopup" onClick={(e) => e.stopPropagation()}>
            <CustomCloseButton setPopup={setContactIsActive} id={'closeContactPopupButton'}/>
            <h1>You may contact with us through our social networks</h1>
            <div className="mainContainerAboutNetworks">
            {!socialNetworksData.length 
            ? 'Happened some error' 
            : socialNetworksData.map((network) => (
               <div className="aboutNetwork">
                <h2>{network.name}</h2>
                 {!network.link 
                 ? <img src={network.img} alt={`network_${network.name}`}/>
                 : <button onClick={() => window.location.href = network.link}>
                    <img src={network.img} alt={`network_${network.name}`}/>
                  </button>
                }
               </div>
            )) }
            </div>
        </div>
      </div>
    </div>
  )
}


