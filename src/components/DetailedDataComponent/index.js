import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const DetailedDataComponent = ({ options }) => {
  return (
    <div className="detailed-data">
      {options.map(option => {
        return (
          <p key={option} className="detailed-data__title">{option}</p>
        )
      })}
    </div>
  )
}

export default DetailedDataComponent

DetailedDataComponent.propTypes = {
  options: PropTypes.array.isRequired
}
