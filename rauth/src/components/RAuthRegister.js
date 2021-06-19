import React from 'react';
import firestore from "./Firestore.js"
const RAuthRegister = () => {

  const submitForm = (event) => {
    event.preventDefault();
    // TODO: Add Firebase, below code is holdover from MongoDB.
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      netid: sessionStorage.getItem("netid"),
      nonRutgersEmail: event.target.email.value,
      fullName: event.target.name.value,
      gradYear: event.target.year.value,
      degreeType: event.target.degree.value
    })

  }
 
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
  );
}

export default RAuthRegister;
