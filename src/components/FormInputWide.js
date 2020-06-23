import React from 'react'

const FormInputWide = ({label, type, value, handleChange}) => {
  return (
    <div className='w-100 fl mb2'>
      <label className='db'>{label}</label>
      <input type={type} value={value} onChange={handleChange} placeholder={label} className='fl w-100 h2 bw1 bw0 br2' />
    </div>
  )
}

export default FormInputWide
