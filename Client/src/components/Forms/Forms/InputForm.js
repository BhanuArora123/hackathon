import React, { useState } from 'react'
import Multiselect from "multiselect-react-dropdown";
import axios from 'axios';


const InputForm = () => {
  const [symptoms, setSymptoms] = useState(["cold", "fever", "headache"]);
  const [saveSym, setsaveSym] = useState([])
  console.log(saveSym)
  // axios.post("",saveSym)

  return (

    <div className="App">
      <h2>Select Symptoms</h2>
      <Multiselect
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          // console.log(event);
          setsaveSym(...saveSym, event)
        }}
        options={symptoms}
        selectedValues={[symptoms[0]]}
        showCheckbox
      />
    </div>
  );
}


export default InputForm
