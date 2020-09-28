import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import ActiveDataComponent from '../ActiveDataComponent'
import response from '../../data/response.json'
import './index.scss'

// mock POST API call function
export const getData = payload => new Promise((resolve, reject) => {
  const error = 'Error getting the active data from the database.'
  if (response.status === 'ok') {
    resolve(response.data)
  }

  reject(error)
})

const DataComponent = ({ filtered_by }) => {
  const [activeData, setActiveData] = useState({})
  const splitFilteredBy = filtered_by.split('_')
  const timeUnit = splitFilteredBy[1].toUpperCase()
  const timeUnitCount = splitFilteredBy[0] === 'This' ? 1 : 0

  const payload = {
    "time_unit": timeUnit,
    "time_unit_count": timeUnitCount
  }

  const activeDataKeys = Object.keys(activeData)

  useEffect(() => {
    getData(payload)
      .then(data => setActiveData(data))
      .catch(e => console.log(e))

  }, [payload])

  if (!activeDataKeys.length) return null

  return (
    <section className="data-component">
      {activeDataKeys.length && activeDataKeys.map(key => {
        const type = key.replace('_', '-')
        const replacedKey = key.replace('_', ' ')
        let title = replacedKey.charAt(0).toUpperCase() + replacedKey.slice(1)

        if (title.includes('source')) title = title.replace('source', 'sourcing')
        if (title.includes('Nps')) title = title.toUpperCase()

        return (
          <ActiveDataComponent
            title={title}
            key={key}
            currentPeriodData={activeData[key].current_period}
            lastPeriodData={activeData[key].last_period}
            type={type}
          />
        )
      })}
    </section>
  )
}

export default DataComponent

DataComponent.propTypes = {
  filtered_by: PropTypes.string.isRequired
}

