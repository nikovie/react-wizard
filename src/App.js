import React, { useState, useEffect } from 'react'
import CategorySelector from './components/CategorySelector'
import Header from './components/Header'
import FormInput from './components/FormInput'
import FormInputWide from './components/FormInputWide'
import FormTextarea from './components/FormTextarea'
import { FaArrowLeft, FaArrowRight, FaPaperPlane } from 'react-icons/fa'

function App() {
  const [ feedback, giveFeedback ] = useState(false)
  const [ activeStep, setStep] = useState(1)
  const [ category, setCategory] = useState('')
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ name, setName ] = useState('')
  const [ mail, setMail ] = useState('')

  const steps = [
    {
      step: 1,
      title: 'Select category',
      shortTitle: 'Category',
      categories: ['Staff', 'Rooms', 'Common spaces', 'Other']
    },
    {
      step: 2,
      title: 'Give feedback',
      shortTitle: 'Feedback',
    },
    {
      step: 3,
      title: 'Contact details',
      shortTitle: 'Contact',
    },
    {
      step: 4,
      title: 'Feedback summary',
      shortTitle: 'Summary'
    }
  ]

  const resetForm = () => {
    giveFeedback(false)
    setStep(1)
    setCategory('')
    setTitle('')
    setBody('')
    setName('')
    setMail('')
  }

  const prevStep = () => {
    setStep(activeStep - 1)
  }

  const nextStep = () => {
    setStep(activeStep + 1)
  } 

  const handleSubmit = (event) => {
    // TODO: 
    // Validate required fields and handle allowed markup
    // Show message if submit success / fails
    
    resetForm()
  }

  const data = [
    {
      category
    },
    {
      'feedback': { title, body }
    },
    { 
      'contact': { name, mail}
    }    
  ]
  const submission = JSON.stringify(data, null, ' ')
  
  if (feedback) {
    return (
      <div>
        <div className='mt4-ns mw6 mw7-ns center system-sans-serif'>
          <div className='pa2 mb2 mb3-ns ph4-ns bg-gray'>
            <Header feedback={feedback} steps={steps} activeStep={activeStep} />
          </div>
          <div className='bg-light-gray pa2 ph4-ns'>
            <div className='mw8 ph3 pv2 tc'>
              <h1 className='mb1'>{ steps.filter((step) => step.step === activeStep).map(step => step.title) }</h1>
            </div>
            <form onSubmit={handleSubmit}>
              { activeStep === 1 && <Step1 categories={steps[0].categories} handleClick={setCategory} goToNext={nextStep} /> }
              { activeStep === 2 && <Step2 title={title} setTitle={setTitle} body={body} setBody={setBody} /> }
              { activeStep === 3 && <Step3 name={name} setName={setName} mail={mail} setMail={setMail} /> }
              { activeStep === 4 && <Step4 steps={steps} category={category} name={name} mail={mail} title={title} body={body} /> }
            </form>
            <div className='w-100 cb pv2'>{submission}</div>
          </div>
          <div className='pa2 mt2 mt3-ns ph4-ns bg-gray'>
            <div className='mw8 ph3 pv2 tc'>
              { 
                activeStep !== 1 && 
                <FaArrowLeft 
                  className='btn-solid-reg' 
                  onClick={prevStep} 
                  title={`Back to ${steps.filter(step => step.step === activeStep-1).map(step => step.shortTitle)}`}
                /> 
              }
              { 
                activeStep < steps.length && 
                <FaArrowRight 
                  className='btn-solid-reg' 
                  onClick={nextStep}
                  title={`Continue to ${steps.filter(step => step.step === activeStep+1).map(step => step.shortTitle)}`}  
                /> 
              }
              { 
                activeStep === steps.length && 
                <FaPaperPlane 
                  className={'btn-solid-reg'} 
                  onClick={handleSubmit}
                  title='Submit'
                /> 
              }
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='mt4-ns mw6 mw7-ns center system-sans-serif'>
          <div className='pa2 mb2 mb3-ns ph4-ns bg-gray'>
            <Header feedback={feedback} steps={steps} activeStep={activeStep} />
          </div>
          <div className='bg-light-gray pa2 ph4-ns'>
            <div className='mw8 ph3 pv2 tc'>
              <div className='btn-solid-reg mv4' onClick={() => giveFeedback(true)}>Give feedback</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

const Step1 = ({categories, handleClick, goToNext}) => {
  return (
    <div>
      {
        categories.map(
          category => 
            <CategorySelector 
              key={category} 
              setCategory={handleClick}
              nextStep={goToNext}
              name={category} 
            />
        )
      }
    </div>
  )
}

const Step2 = ({title, setTitle, body, setBody}) => {
  return (
    <div>
      <FormInputWide 
        label='Title'
        type='text'
        value={title} 
        handleChange={(event) => setTitle(event.target.value)}
      />
      <FormTextarea 
        label='Feedback'
        value={body}
        handleChange={(event) => setBody(event.target.value)}
      />
    </div>
  )
}

const Step3 = ({name, setName, mail, setMail}) => {
  return (
    <div>
      <FormInput 
        label='Name' 
        type='text'
        value={name} 
        handleChange={(event) => setName(event.target.value)}
      />
      <FormInput 
        label='Mail'
        type='email'
        value={mail} 
        handleChange={(event) => setMail(event.target.value)}
      />
    </div>
  )
}

const Step4 = ({steps, category, name, mail, title, body }) => {
  return (
    <div>
      <div className='w-100 fl mb2 pb2 bb'>
        <label className='db'>{steps[0].shortTitle}: </label>
        {category}
      </div>
      
      <div className='w-100 fl mb2 pb2 bb'>
        <div className='mb2'>
          <label className='db'>Title: </label>
          {title}
        </div>
        <div>
        <label className='db'>Feedback: </label>
        <span className='preview'>{body}</span>
        </div>
      </div>

      <div className='w-100 fl mb2 pb2 bb'>
        <div className='mb2'>
          <label className='db'>Name: </label>
          {name}
        </div>
        <div>
          <label className='db'>Mail: </label>
          {mail}
        </div>
      </div>
    </div>
  )
}

export default App;
