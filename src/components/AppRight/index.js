import React from 'react'
import {Card, CardContent} from "@material-ui/core"
import {useContext} from 'react';
import {CountryContext} from '../../context/country-context'

import Table from './components/table';
import LineGraph from './components/LineGraph'

function AppRight() {
  const {tableData} = useContext(CountryContext);

  return (
    <Card>
      <CardContent>
        <h3>Live Cases by Country</h3>
        <Table countries={tableData} className="table"/>
        <h3>Worldwide new cases</h3>
        <LineGraph />
      </CardContent>
    </Card>
  )
}

export default AppRight
