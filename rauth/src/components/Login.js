import { useState } from 'react'
import GoogleLogin from 'react-google-login'
//import { Redirect } from 'react-router-dom' | Debating Utilization of React Router

import RAuthRegister from './RAuthRegister'
import ServiceRegister from "./ServiceRegister"

const Login = ({ verifyCallback, serviceRegistration, redirectComponent }) => {
  const [netid, setNetid] = useState("")
  const [existsInsService, setExistsInsService] = useState(false)
  const [existsInRAuth, setexistsInRAuth] = useState(false)
  const [attempt, setAttempt] = useState(false)

  const responseGoogleSuccess = async (res) => {
    processGoogleAuth(res)
    await checkServiceUser(netid)
    await checkRAuthUser(netid)
    setAttempt(true)
    sessionStorage.setItem('netid', netid)
  }
  const responseGoogleFailure = (response) => {
    console.log(response)
  }

  const processGoogleAuth = (response) => {
    let netid = response['At']['ku']
    let index = netid.indexOf('@')
    netid = netid.substring(0, index)
    setNetid(netid)
  }

  const checkServiceUser = async (netid) => {
      await verifyCallback(netid)
        .then(res => res.json())
        .then(r => setExistsInsService(r))
  }

  const checkRAuthUser = async (netid) => {
    // TO-DO Add Firebase, below code is holdover from MongoDB.
    await fetch(`http://127.0.0.1:5000/getUser?netid=${netid}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(r => setexistsInRAuth(r))
  }

  if(attempt){
    if(existsInsService){
        return redirectComponent
    }
    else if(existsInRAuth){
        return <ServiceRegister serviceRegistration={serviceRegistration} />
    }
    else {
        return <RAuthRegister />
    }
  }
  else {
    (
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
