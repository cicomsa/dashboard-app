import React, { useState } from 'react'
import DataComponent from './components/DataComponent'
import selectorsData from './data/selectorsData.json'
import SelectorComponent from './components/SelectorComponent'
import DetailedDataComponent from './components/DetailedDataComponent'
import TableComponent from './components/TableComponent'
import './App.scss'

const App = () => {
  const [value, setValue] = useState({ sort_by: 'id', filter_by: 'this_month' })
  console.log({ value })
  return (
    <section className="main-wrapper">
      <div className="wrapper">
        <div className="container data-container">
          <SelectorComponent
            title={selectorsData.filter_by.title}
            options={selectorsData.filter_by.options}
            type={selectorsData.filter_by.type}
            value={value}
            setValue={setValue}
          />
          <DataComponent filtered_by={value.filter_by} />
        </div>
        <DetailedDataComponent options={selectorsData.filter_by.options} />
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="selected-data">
            <input type="checkbox" name="critical" />
            <label htmlFor="critical">Show critical</label>
            <SelectorComponent
              title={selectorsData.sort_by.title}
              options={selectorsData.sort_by.options}
              type={selectorsData.sort_by.type}
              value={value}
              setValue={setValue}
            />
          </div>
          <TableComponent />
        </div>
        <DetailedDataComponent options={selectorsData.sort_by.options} />
      </div>
    </section>
  );
}

export default App;
