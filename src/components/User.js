import React, { Component, Fragment } from 'react'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

class User extends Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />

    return (
      <Fragment>
        <Link to="/" className="inline-block bg-indigo-200 text-indigo-800 rounded p-3 m-2 trans-animation">
          Back to Search
        </Link>
        Hireable: {' '}
        {hireable ? (
          <i className="fas fa-check text-green-500"/>
        ) : (
          <i className="fas fa-times-circle text-red-800"/>
        )}
        <div className="p-4 border-2 mx-3 my-0 grid-2 rounded">
          <div className="flex flex-col w-full mx-auto justify-center items-center text-center">
            <img src={avatar_url} className="rounded-full w-40" alt=''/>
            <h1 className="text-2xl text-indigo-600 font-semibold my-2">{name}</h1>
            <p><Fragment>
                  <span className="text-gray-500">Location: </span> <strong className="text-gray-700">{location}</strong>
                </Fragment></p>

          <div>
            {bio && (
              <Fragment>
                <p className="mt-3 mb-4 text-indigo-600 font-semibold">{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="my-3 bg-indigo-200 text-indigo-800 rounded p-3 m-4 trans-animation">Visit Github Profile</a>
            <ul>
              <li className="mb-2 mt-4">{login && (
                <Fragment>
                  <span className="text-gray-500">Username: </span> <strong className="text-gray-700">{login}</strong>
                </Fragment>
              )}</li>
              <li className="my-2">{company && (
                <Fragment>
                  <span className="text-gray-500">Company: </span> <strong className="text-gray-700">{company}</strong>
                </Fragment>
              )}</li>
              <li></li>
              <li className="my-2">
                {blog && (
                  <Fragment>
                    <span className="text-gray-500">Website: </span> <strong className="text-gray-700">{blog}</strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="text-center p-4 border-2 mx-3 my-2 rounded">
          <div className="inline-block font-sm px-3 py-1 font-semibold text-center bg-blue-500 text-white rounded m-2">Followers: {followers}</div>
          <div className="inline-block font-sm px-3 py-1 font-semibold text-center bg-green-500 text-white rounded m-2">Following: {following}</div>
          <div className="inline-block font-sm px-3 py-1 font-semibold text-center bg-indigo-500 text-white rounded m-2">Public Repos: {public_repos}</div>
          <div className="inline-block font-sm px-3 py-1 font-semibold text-center bg-orange-500 text-white rounded m-2">Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    )
  }
}

export default User;