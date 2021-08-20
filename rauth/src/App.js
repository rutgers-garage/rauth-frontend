import React, { useState } from 'react'
import RAuthLogin from './components/RAuthLogin'

const database = new Set(['sao93'])

const App = () => {
  const [netId, setNetId] = useState(null)
  const [jwt, setJwt] = useState(null)
  const [error, setError] = useState(null)

  return (
    <div>
      {!error && (
        <RAuthLogin
          onVerify={async function ({ netId }) {
            return database.has(netId)
          }}
          onSuccess={function ({ jwt, netId }) {
            console.log(jwt, netId);
            setNetId(netId)
            setJwt(jwt)
          }}
          onFailure={function (error) {
            if (!error) {
              return
            }

            setError(error)
          }}
        />
      )}


    </div>
  )
}

export default App
