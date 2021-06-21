import React from 'react' 
import { useState } from 'react'
import GoogleLogin from 'react-google-login'

import Router from './Router'

const Login = ({ verifyCallback, serviceRegistration, redirectComponent }) => {
  const [netid, setNetid] = useState("")
  const [attempt, setAttempt] = useState(false)

  const responseGoogleSuccess = async (res) => {
    console.log(res)
    await processGoogleAuth(res)
    setAttempt(true)
    sessionStorage.setItem('netid', netid)
  }
  const responseGoogleFailure = (response) => {
    console.log(response)
  }

  const processGoogleAuth = async (response) => {
    let email = response['Ys']['It']
    let index = email.indexOf('@')
    setNetid(email.substring(0, index))
    console.log(netid)
  }
  
  if(attempt) {
    return <Router netid={netid} verifyCallback={verifyCallback} serviceRegistration={serviceRegistration} redirectComponent={redirectComponent}/>
  }

  else {
    return (
      <div>
        <GoogleLogin
          clientId='928852366939-tps39s15ntonmmrc0pllpj0klionbs7c.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={'single_host_origin'}
          hostedDomain='scarletmail.rutgers.edu'
        />
      </div>
    )
  }
}

export default Login
