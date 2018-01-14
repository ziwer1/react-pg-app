import React from 'react'
import Fish from './Fish'
import ModalGeneric from './ModalGeneric'
import { Route } from 'react-router-dom'

function Category({ match }) {
  return (
    <div>
      <h1> Category below </h1>
      <ModalGeneric buttonLabel="launch modal"></ModalGeneric> 
      {/* here's a Route */}
      <Route path={match.url + '/fish'} component={Fish}/>

    </div>
  )
}


export default Category