import React from 'react'
import '../css/table.css'

function Table({countries}) {
  return (
    <div className="table">
      {countries.map(({country, cases})=>(
        <tr key={country + "table"}>
          <td>{country}</td>
          <td><strong>{cases}</strong></td>
        </tr>
      ))}
    </div>
  )
}

export default Table;
