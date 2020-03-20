import React from 'react'

const RepoItem = ({ repo }) => {
  return (
    <div className="flex flex-row p-4 items-center border rounded mx-3 bg-red-100 overflow-hidden transition-shadow hover:shadow-lg">
      <h3 className="text-3xl font-semibold leading-loose text-indigo-600">
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}

export default RepoItem
