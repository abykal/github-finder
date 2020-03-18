import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
    <div className="p-4 m-2 opacity-75 bg-orange-600 text-white">
      <i className="fas fa-info-circle" /> {alert.msg}
    </div>)
  )
}

export default Alert
