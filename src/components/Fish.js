import React from 'react'
import Tilapia from './Tilapia'
import { Route } from 'react-router-dom'

function Fish({match}) {
  return (
    <div>
      <h2>fish types</h2>
      <Route
      path={match.url + '/tilapia'}
      component={Tilapia}
      />

    </div>
  )
}


export default Fish