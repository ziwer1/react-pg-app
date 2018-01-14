import React, { Component } from 'react'
import { CounterContainer, PostsList } from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { GenericDiv, Category} from '../components'

const Container = styled.div`text-align: center;`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" component={CounterContainer} />
          <Route path="/generic" component={GenericDiv} />
          <Route path="/category" component={Category} />
          <Route path="/posts" component={PostsList} />
        </Container>
      </Router>
    )
  }
}

export default Routes
