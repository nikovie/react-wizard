import React from 'react'

const Progress = ({activeStep, step}) => {
  const width = activeStep * step

  return (
    <div className={`bg-light-blue h-100 br3 w-${width}`}>
      
    </div>
  )
}

const ProgressBar = ({activeStep, totalSteps}) => {
  const step = 100 / totalSteps
  return (
    <div className='bg-white h1 ba bw1 b--black br4' >
      <Progress activeStep={activeStep} step={step} />
    </div>
  )
}

export default ProgressBar
