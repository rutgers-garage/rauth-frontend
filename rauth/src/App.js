import React from 'react'

import Login from './components/Login'
import 'rauth-frontend/dist/index.css'

const App = () => {

  const ServiceRegistrationTest = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log({test: e.target.test.value})
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="test" placeholder="Test"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
  
  const RedirectTest = () => {
    return <div>WaWoWeeWa</div>
  }

  const testCallBack = async (netid) => {
    return {exists: false}
  }

  return <Login verifyCallback={testCallBack} serviceRegistration={<ServiceRegistrationTest/>} redirectComponent={<RedirectTest/>} />
}

export default App
