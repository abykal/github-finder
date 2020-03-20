import React, { Fragment } from 'react'

const About = () => {
  return (
    <Fragment>
      <p className="text-gray-600 text-4xl mt-10">About this App</p>
      <hr />
      <p className="text-gray-800 mt-5 text-xl">App to search GitHub users</p>
      <p className="text-red-500 text-sm">Author: Aby Abraham K</p>
      <p className="text-red-400 text-sm">Version: 0.2.0</p>
    </Fragment>
  )
}

export default About
