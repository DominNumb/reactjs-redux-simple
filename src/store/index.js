import userList from './users.js'
import movieList from './movies.js'
import userSelected from './userSelected'

const allReducers = {
  userList,
  movieList,
  userSelected,
}

const reducer = (state = allReducers, action) => {
  const newState = { ...state }
  switch (action.type) {
    case 'USER_SELECTED':
      console.log(action.data.username, ' user select')
      console.log(userSelected)
      console.log({ ...state })
      newState.userSelected = action.data
      console.log(newState)
      return newState
      break
    case 'USER_DELETE':
      console.log('user delete')
      break
  }
  return newState
}

export default reducer
