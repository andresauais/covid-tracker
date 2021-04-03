import React from 'react'
import {Card, CardContent} from "@material-ui/core"
import {useContext} from 'react';
import {CountryContext} from '../../context/country-context'

import Table from './components/table';
import LineGraph from './components/LineGraph'

function AppRight() {
  const {tableData, casesType} = useContext(CountryContext);

  return (
    <Card className="app__right">
      <CardContent>
        <h3>Live Cases by Country</h3>
        <Table countries={tableData} className="table"/>
        <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
        <LineGraph className="app__graph" casesType={casesType}/>
      </CardContent>
    </Card>
  )
}

export default AppRight
