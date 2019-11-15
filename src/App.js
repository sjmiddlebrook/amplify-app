import React, { useEffect } from 'react'
import { withAuthenticator } from 'aws-amplify-react'

function App() {
    return (
        <div>
            <h1>Hello from AWS Amplify</h1>
        </div>
    )
}

export default withAuthenticator(App, { includeGreetings: true })