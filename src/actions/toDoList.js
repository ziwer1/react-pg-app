import { SELECT_FILTER, ADD_ITEM, CHECK_UNCHECK_ITEM, DELETE_ITEM } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

//export const increment = createAction(INCREMENT_COUNTER)

//export const decrement = createAction(DECREMENT_COUNTER)
 
export function checkUncheckItem(index) {
  return {
  	type:CHECK_UNCHECK_ITEM,
  	payload:index
  }
}

export function addItem(item) {
  return {
  	type:ADD_ITEM,
  	payload:item
  }
}

export function selectFilter(selection) {
  return {
  	type:SELECT_FILTER,
  	payload:selection
  }
}