import React from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'

const Users = ({ users, loading }) => {
  if(loading) {
    return <Spinner />
  } else {
    <div className="grid grid-cols-3 gap-4">
      { users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  }
}

export default Users
