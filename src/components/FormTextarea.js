import React from 'react'

const FormInputWide = ({label, value, handleChange}) => {
  return (
    <div className='w-100 fl'>
      <label className='db'>{label}</label>
      <textarea value={value} onChange={handleChange} placeholder={label} className='fl w-100 h4 bw1 bw0 br2' />
    </div>
  )
}

export default FormInputWide
