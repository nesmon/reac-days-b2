import './UsersList.css'

function UsersList(props) {
  return (
    <ul className='usersList'>
      {props.users.map((user) => (
        <li key={user.id} >
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  )
}

export default UsersList