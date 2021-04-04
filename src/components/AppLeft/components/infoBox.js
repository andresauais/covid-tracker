import React from 'react'
import{ Card, CardContent, Typography } from "@material-ui/core"
import {casesTypeColors} from '../../../utils/colors'
import '../css/infoBox.css'

function infoBox({title, cases, total, active, ...props}) {
  let color = "infoBox__color--" + title;

  return (
    <Card className={`infoBox ${active &&'infoBox--selected'}`} onClick={props.onClick}>
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
        <h2 className={`infoBox__cases ${color}`}>{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  )
}

export default infoBox
