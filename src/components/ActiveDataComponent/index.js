import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ActiveDataComponent = ({ type, title, currentPeriodData, lastPeriodData }) => {
  return (
    <div className={`active-data active-data--${type}`}>
      <p className="active-data__title">{title}</p>
      <p className="active-data__current-period">{currentPeriodData}</p>
      <p className="active-data__last-period">
        <span>{lastPeriodData} </span>
        Last Period
    </p>
    </div>
  )
}

export default ActiveDataComponent

ActiveDataComponent.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentPeriodData: PropTypes.number.isRequired,
  lastPeriodData: PropTypes.number.isRequired
}
