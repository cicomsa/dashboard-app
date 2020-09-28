import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const SelectorComponent = ({ title, type, options, value, setValue }) => {
  const handleChange = e => setValue({ ...value, [type]: e.target.value })

  return (
    <div className="selector">
      <p className="selector__title">{title}</p>
      <select onChange={handleChange} value={value[type]} type={type}>
        {options.map(option => {
          const optionValue = option.toLowerCase().replace(/ /g, '_')
          return (
            <option
              value={optionValue}
              name={type}
              key={option}
            >
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectorComponent

SelectorComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}
