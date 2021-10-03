import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-number-input'


const SignUpform = () => {

  const [value, setValue] = useState()
  const [otp, setotp] = useState(false)
  const [OtpValue, setOtpValue] = useState()
  const clickHandler = () => {
    if (value) {
      setotp(true)
    }
    else {
      setotp(false)
    }
  }

  useEffect(() => {

    if (value === "") {
      setotp(false)
    }

  }, [value])

  return (
    <div>
      <PhoneInput
        defaultCountry="IN"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue} />
      <button className="btn btn2" onClick={clickHandler}>Submit</button>

      {otp ?
        <div><input className="inp" type="number" value={OtpValue} onChange={(e) => { setOtpValue(e.target.value) }} placeholder="Enter otp" /></div> : null}
    </div>
  )
}

export default SignUpform
