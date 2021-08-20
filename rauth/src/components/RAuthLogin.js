import React from "react";
import GoogleLogin from 'react-google-login'

const getNetIdFromResponse = (response) => {
  console.log(response)
  return ""
}

const RAuthLogin = ({ onVerify, onSuccess: successCallback, onFailure }) => {
  const onSuccess = async (res) => {
    const netId = getNetIdFromResponse(res)
    const verifiedNetId = await onVerify({ jwt: res.tokenId, netId })

    if (verifiedNetId) {
      successCallback({ jwt: res.tokenId, netId });
    } else {
      onFailure(null);
    }
  }

  return (
    <GoogleLogin
      clientId='928852366939-tps39s15ntonmmrc0pllpj0klionbs7c.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      hostedDomain='scarletmail.rutgers.edu'
    />
  )
}

export default RAuthLogin
