import { useState } from 'react';
import './UserForm.css'

const UserForm = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState(null)
    const [isEditing, setIsEditing] = useState(false)


    function submitForm(e) {
        e.preventDefault()

        if (name === '' || age === '') {
            setError('Please fill all fields')
            return
        }
        
        setError(null)

        const data = {
            id: props.users.length + 1,
            name,
            age
        }

        props.onAddUsers(data)
        return stopEditingHandler()
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    
    return (
        <div>
            {error && <p>{error}</p> }
            {!isEditing && (
                <button className='addUser' onClick={startEditingHandler}>Add a user</button>
            )}
            {isEditing && (
                <form onSubmit={submitForm}>
                    <input className='input' type="text" placeholder="name" onChange={e => setName(e.target.value)} />
                    <input className='input' type="number" placeholder="age" onChange={e => setAge(e.target.value)} />
                    <button className='button submit' type="submit">Submit</button>
                    <button className='button cancel' type="button" onClick={stopEditingHandler}>Cancel</button>
                </form>
            )}
        </div>
    )
}

export default UserForm