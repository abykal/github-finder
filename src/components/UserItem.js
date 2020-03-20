import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: {login, avatar_url, html_url} }) => {
  return (
    <div className="flex flex-row p-4 items-center border rounded mx-3 bg-red-100 overflow-hidden transition-shadow hover:shadow-lg">
      <img src={avatar_url} alt='' className="rounded-full w-16 h-16"/>
      <div className="ml-5 flex flex-col jusitfy-between">
        <h3 className="text-3xl font-semibold leading-loose text-indigo-600">{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="inline-block bg-indigo-200 text-indigo-800 py-1 px-2 rounded-lg cursor-pointer outline-none">More</Link>
        </div>
      </div>
      
    </div>
  )
}

export default UserItem
