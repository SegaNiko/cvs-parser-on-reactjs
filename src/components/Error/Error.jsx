import React from 'react'
import img from '../../images/arhimed.jpg'

import "./index.css"

export const Error = () => {
  return (
    <div className="error">
         <h3 className="error__title">Arhimed confused!</h3>
         <p className="error__text">Please check format file before send it is must be .csv</p>
         <img className="error__img" alt="think-about" src={img} />
       </div>
  )
}
