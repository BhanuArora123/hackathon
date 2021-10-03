import React from 'react'
import ImageForm from './Forms/ImageForm'
import InputForm from './Forms/InputForm'
import './Forms.css'

const FormsMainComp = () => {
  return (
    <div className="form__main">
      <div className="inputform"><InputForm /></div>
      <div><ImageForm /></div>

    </div>
  )
}

export default FormsMainComp
