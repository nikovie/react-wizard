import React from 'react'

const CategorySelector = ({setCategory, nextStep, name}) => {
  return (
    <div
      className='btn-solid-reg mh2 mb2'
      onClick={() => {
        setCategory(name)
        nextStep()
      }}
    >
      {name}
    </div>
  )
}

export default CategorySelector
