import { LOAD_USERS } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'
import axios from 'axios'

export function loadUsers() {
	console.log('button clicked')
  return (dispatch) => { 
  	console.log('the callback with dispatch has run')
    dispatch({
    	type:'LOAD_USERS',
    	payload:axios.get('http://jsonplaceholder.typicode.com/posts?userId=8')
    })
  }
}
