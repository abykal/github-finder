import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: {login, avatar_url, html_url} }) => {
  return (
    <div className="p-4 border rounded shadow mx-3">
      <img src={avatar_url} alt='profile image' className="rounded-full w-4"/>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="inline-block bg-red-200 px-2 py-5 mr-2 cursor-pointer outline-none my-1">More</Link>
      </div>
    </div>
  )
}

export default UserItem
