import React from 'react'
import CV_WebDeveloper from './cv_Hatem.pdf'
import "./cv.scss"

const Cv = () => {
  return (
    <div className='cv'>
        <a href={CV_WebDeveloper} download="Hatem yakoubi.pdf" className='btn'>Get Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default Cv