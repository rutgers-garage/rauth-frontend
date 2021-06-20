import React, { useState } from 'react'

import ServiceRegister from './ServiceRegister'
import Firebase from './Firestore'

const RAuthRegister = ({ netid, serviceRegistration}) => {

  const [registered, setRegistered] = useState(false)

  const submitForm = (event) => {
    event.preventDefault();
    // TODO: Add Firebase, below code is holdover from MongoDB.
    const db = Firebase.firestore();
    
    db.collection("users").add({
      netid: netid,
      nonRutgersEmail: event.target.email.value,
      fullName: event.target.name.value,
      gradYear: event.target.year.value,
      degreeType: event.target.degree.value
    })

    setRegistered(true)

  }
 
  if(registered) {
    return <ServiceRegister serviceRegistration={serviceRegistration} />
  }
  else {
    return(
      <div>
        <h1>Register</h1>
        <div className="reg">
          <form id="regForm" onSubmit={submitForm}>
            <label>
              Regular Email:
              <input name="email" type="text"/>
            </label>

            <label>
              Full Name:
              <input name="name" type="text" />
            </label>

            <label>
              Grad Year:
              <input name="year" type="text" />
            </label>

            <label>Degree Type:</label>
            <select name="degree" type="degree">
              <option value="BA">Bachelor of Arts</option>
              <option value="BS">Bachelor of Science</option>
              <option value="MS">Masters</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default RAuthRegister;
