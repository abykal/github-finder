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
        <Link to="/" className="inline-block bg-red-800 text-white p-3 m-2 trans-animation">
          Back to Search
        </Link>
        Hireable: {' '}
        {hireable ? (
          <i className="fas fa-check text-success"/>
        ) : (
          <i className="fas fa-times-circle text-red-800"/>
        )}
        <div className="p-4 border-2 mx-3 my-0 grid-2">
          <div className="flex flex-col w-full mx-auto justify-center items-center text-center">
            <img src={avatar_url} className="rounded-full w-40" alt=''/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="my-1 bg-red-800 text-white p-3 m-2 trans-animation">Visit Github Profile</a>
            <ul>
              <li>{login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}</li>
              <li>{company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}</li>
              <li></li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center p-4 border-2 mx-3 my-0">
          <div className="inline-block font-sm px-1 py-3 text-center bg-blue-500 text-red-800 rounded m-2">Followers: {followers}</div>
          <div className="inline-block font-sm px-1 py-3 text-center bg-green-500 text-red-800 rounded m-2">Following: {following}</div>
          <div className="inline-block font-sm px-1 py-3 text-center bg-indigo-500 text-red-800 rounded m-2">Public Repos: {public_repos}</div>
          <div className="inline-block font-sm px-1 py-3 text-center bg-orange-500 text-red-800 rounded m-2">Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    )
  }
}

export default User;