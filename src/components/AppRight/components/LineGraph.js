import React, {useState,useEffect, useContext} from 'react'
import { Line } from 'react-chartjs-2'
import { buildChartData } from '../../../utils/buildChartData'
import numeral from 'numeral';
import {CountryContext} from '../../../context/country-context'
import {casesTypeColors} from '../../../utils/colors'

const options ={
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data){
        return numeral(tooltipItem.value).format("+0,0");
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function LineGraph({casesType, className}) {

  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=100')
      .then(response=> response.json())
      .then(data =>{
        const chartData = buildChartData(data, casesType);
        setData(chartData);
      })
    }
    fetchData();
  }, [casesType])
  let lineColor = (casesType == "cases") ? "#CC1034" : "green";
  return (
    <div className={className}>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: casesTypeColors[casesType].table.fillColor,
                borderColor: casesTypeColors[casesType].table.color,
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  )
}

export default LineGraph
