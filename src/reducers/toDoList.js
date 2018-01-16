import { SELECT_FILTER, ADD_ITEM, CHECK_UNCHECK_ITEM } from 'constants/ActionTypes'

const initialState = {
	listItems: [{item:'fish', completed:false}, {item:'millet', completed:false}, {item:'bananas', completed:false}],
	filter: 0 //0 is none, 1 is active, 2 is false
}

export default function toDoList(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTER:
      return state + 1
    case ADD_ITEM:
      return state - 1
    default:
      return state
  }
}
