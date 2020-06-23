import React from 'react'

const FormInput = ({label, type, value, handleChange}) => {
  return (
    <div className='w-auto fl mb2 mr2'>
      <label className='db'>{label}</label>
      <input type={type} value={value} onChange={handleChange} placeholder={label} className='h2 bw1 bw0 br2' />
    </div>
  )
}

export default FormInput
