import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SelectUser = (user) => {
  console.log(user.username, ' was selected!')
  return {
    type: 'USER_SELECTED',
    data: user,
  }
}

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((usr) => (
          <li key={usr.id} onClick={() => this.props.handleUserSelect(usr)}>
            {usr.username}
          </li>
        ))}
      </div>
    )
  }
}

{
  /* ----- CONTAINER -----  */
}
function mapStateToProps(state) {
  return {
    users: state.userList.users,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    handleUserSelect: (user) => dispatch({ type: 'USER_SELECTED', data: user }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
