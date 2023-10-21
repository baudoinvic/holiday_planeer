import React from 'react'
import './Intro.css'


const Intro = () => {
  return (
    <div className="container">
    <div className="text-column">
    <div className='intro-container'>
      <div  className='intro'>
        <h3 style={{color: '#C29D59'}}>Amazing Tours</h3>
        <h1>Trending, Best Selling<br></br>Tours And Fun Destinations</h1>
      </div>
    </div>
  </div>

  <div className="button-column">
    <div className='preview'>
      <button>Preview</button>
    </div>
    
    <div>
      <div className=''>
      <button>Next</button>
      </div>
    </div>
    
  </div>
</div>

  )
}

export default Intro