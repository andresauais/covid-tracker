import React from 'react'
import '../css/table.css'
import numeral from 'numeral';

function Table({countries}) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(({country, cases})=>(
          <tr key={country + "table"}>
            <td>{country}</td>
            <td><strong>{numeral(cases).format("0,0")}</strong></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
