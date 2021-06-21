import React, { useState } from 'react'
import RAuthRegister from './RAuthRegister'
import ServiceRegister from './ServiceRegister'
import Firebase from './Firestore'

const Router = ({netid, verifyCallback, serviceRegistration, redirectComponent}) => {

  const [existsInService, setExistsInService] = useState(false)
  const [existsInRAuth, setExistsInRAuth] = useState(false)

    const checkServiceUser = async () => {
        await verifyCallback(netid)
          //.then(res => res.json())
          .then(r => setExistsInService(r.exists))
    }
  
    const checkRAuthUser = async () => {
      console.log(netid)
      await Firebase
        .firestore()
        .collection('users')
        .where("netid", "==", netid)
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.docs.length > 0){
              setExistsInRAuth(true)
              const response = querySnapshot.docs[0]._delegate._document.data.value.mapValue.fields
              let body = {}
              Object.entries(response).map(e => body[e[0]] = e[1].stringValue)
              sessionStorage.setItem('body', JSON.stringify(body))
            }
        });  
    }
    checkRAuthUser()
    checkServiceUser()

    if(existsInService){
        return redirectComponent
    }
    else if(!existInService && existsInRAuth){
        return <ServiceRegister serviceRegistration={serviceRegistration} />
    }
    else if(!existsInRAuth && !existsInService) {
        return <RAuthRegister netid={netid} serviceRegistration={serviceRegistration} />
    }
}

export default Router