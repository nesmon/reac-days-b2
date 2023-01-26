import { useState } from 'react'
import UserForm from './component/FormComponent/UserForm'
import UsersList from './component/ListComponent/UsersList'
import './App.css'

const DEFAULT_USERS = [{
    id: 1,
    name: 'Franck',
    age: 32,
  },
  {
    id: 2,
    name: 'Jacky',
    age: 5,
  },
  {
    id: 3,
    name: 'George',
    age: 53,
  },
]

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS)

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [...prevUsers, user]
    })
  }

  return (
    <div className="App">
      <UserForm onAddUsers={addUserHandler} users={users} />
      <UsersList users={users}/>
    </div>
  )
}

export default App
