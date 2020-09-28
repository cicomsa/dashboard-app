import React from 'react'
import './index.scss'

const TableComponent = () => {
  return (
    <table border="1" rules="rows" frame="void">
      <thead>
        <tr>
          <th>Id</th>
          <th>Company name</th>
          <th>Segment</th>
          <th>Contract</th>
          <th>Renewals</th>
          <th>NPS avg</th>
          <th>NPS last</th>
          <th>NPS first</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123</td>
          <td>Gronda</td>
          <td>Hospitality</td>
          <td>XYZ-123</td>
          <td>Yes</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr>
          <td>124</td>
          <td>Samsung</td>
          <td>Tech</td>
          <td>WYZ-143</td>
          <td>Yes</td>
          <td>8</td>
          <td>10</td>
          <td>6</td>
        </tr>
        <tr>
          <td>125</td>
          <td>Hawei</td>
          <td>Retail</td>
          <td>AVZ-123</td>
          <td>Yes</td>
          <td>6</td>
          <td>8</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableComponent
