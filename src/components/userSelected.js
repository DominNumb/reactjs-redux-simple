import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserSelected extends Component {
  render() {
    if (!this.props.user.username) {
      return <>Select User!</>
    }
    return (
      <>
        <div>
          <h1>User:</h1>
        </div>
        <div>
          <strong>Username: </strong>
          {this.props.user.username}
        </div>
        <div>
          <strong>Email: </strong>
          {this.props.user.email}
        </div>
        <div>
          <strong>Password: </strong>
          {this.props.user.password}
        </div>
        <div>
          <img
            style={{ margin: 30 }}
            src={this.props.user.thumbnail}
            height={250}
            width={250}
          />
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.userSelected,
  }
}

export default connect(mapStateToProps)(UserSelected)
