import '../App.css'
import UserList from './userList'
import UserSelected from './userSelected'

function App() {
  return (
    <div className="App">
      <div>
        <h1>List of users:</h1>
      </div>
      <UserList />
      <hr />

      <UserSelected />
    </div>
  )
}

export default App
