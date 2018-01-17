import { SELECT_FILTER, ADD_ITEM, CHECK_UNCHECK_ITEM, DELETE_ITEM } from 'constants/ActionTypes'

const initialState = {
	listItems: [{id:1, item:'fish', completed:false}, {id:2, item:'millet', completed:true}, {id:3, item:'bananas', completed:false}],
	filter: 0 //0 is none, 1 is active, 2 is complete
}

export default function toDoList(state = initialState, action) {
  switch (action.type) {
    case CHECK_UNCHECK_ITEM:

    	const i = action.payload;

      return {...state, 
      	listItems:[...state.listItems.slice(0,i), 
      	{...state.listItems[i], completed:!state.listItems[i].completed},
      	...state.listItems.slice(i + 1)
      	]
      };
    case ADD_ITEM:
      return {...state,
      	listItems:[...state.listItems, action.payload]
      }
    case SELECT_FILTER:
      return {...state,
      	filter:action.payload
      }
    default:
      return state
  }
}
