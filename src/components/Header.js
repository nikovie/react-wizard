import React from 'react'
import ProgressBar from './ProgressBar'

const Header = ({feedback, steps, activeStep}) => {
  if (feedback) {
    return (
      <div className='mw8 ph3 pv2'>
        <span className='f4'>Step: {activeStep} / {steps.length}</span>
        <ProgressBar activeStep={activeStep} totalSteps={steps.length} />
      </div>
    )
  } else {
    return (
      <div>
        <h1 className='ma3'>Greetings!</h1>
      </div>
    )
  }
  
}

export default Header
