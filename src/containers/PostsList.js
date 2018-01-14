import React from 'react'
import PropTypes from 'prop-types'
import { Counter } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostsListActions from 'actions/postsList'
import { Table, Container, Row, Col, Button } from 'reactstrap'

class PostsList extends React.Component {
  
  constructor(props){
    super(props)
  }

  fish = () => {
    return <h2>Loaded Data Table.</h2>
  }

  showTable = () => {

    const tableRows = this.props.posts.map((post, index) => 
        <tr key={post.id}>
            <th scope="row">{++index}</th>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
      )

    const table = (
      <Table inverse>
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    )

    return table

  }  

  render() {
    return (

      <Container>
        <Row>
          <Col md='6'>
            <h1>{this.fish()}</h1>
            {this.showTable()}
          </Col>
          <Col md='6'>
            <h2>Create/Load data form</h2>
            <Button outline color="primary" onClick={() => this.props.loadUsers()}>Load data</Button>{' '}
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostsListActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
