import React from 'react'

export const CustomInput = ({value,type,id,placeholder,onChange}) => {
  return (
    <input value={value} type={type} className={'customInput'} id={id} placeholder={placeholder} onChange={(e) => onChange(e)}/>
  )
}