import React from 'react'

import Login from './components/Login'
import 'rauth-frontend/dist/index.css'

const App = () => {

  const Test = () => {
    return <div>reeeeeeeee</div>
  }
  
  const Test2 = () => {
    return <div>WaWoWeeWa</div>
  }

  const testCallBack = async (netid) => {
    return {exists: false}
  }

  return <Login verifyCallback={testCallBack} serviceRegistration={Test} redirectComponent={Test2} />
}

export default App
