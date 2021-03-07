import React from 'react'

import "./index.css"

export const InputFile = ({onChange}) => {
  return (
    <div className="input__wrapper">
      <input id="input__file" name="file" type="file" className="input input__file" onChange={onChange} />
      <label htmlFor="input__file" className="input__file-button" >
        <span className="input__file-icon-wrapper"><i className="fas fa-cloud-download-alt"></i></span>
        <span className="input__file-button-text">Choose one file</span>
      </label>
    </div>
  )
}
