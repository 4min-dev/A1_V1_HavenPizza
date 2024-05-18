import React from 'react'
import { useNavigate } from 'react-router-dom'
export const BackButton = () => {
    const currLocate = useNavigate()
  return (
    <button type='button' className='backButton' onClick={() => currLocate(-1)}>
        Go Back
    </button>
  )
}