import { combineReducers } from 'redux'
import counter from './counter'
import posts from './posts'
import toDoList from './toDoList'

const rootReducer = combineReducers({
  counter,
  posts,
  toDoList,
})

export default rootReducer
