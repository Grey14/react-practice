import React, { Component } from 'react';
//import { BarChart } from 'react-d3-basic';
import { BarTooltip } from 'react-d3-tooltip';
import ChartData from '../../data/AQI.json';
//var BarTooltip = require('react-d3-tooltip').BarTooltip;

export default class Bar extends Component {
  render() {

    var SimpleTooltipStyle = require('react-d3-tooltip').SimpleTooltip;
    var width = 1200,
      height = 400,
      chartSeries = [
        {
          field: 'Avg',
          name: 'PM2.5 Average',
          style: {
            'fill-opacity': .5
          }
        }
      ],
      x = function (d) {
        return d.County;
      },
      xScale = 'ordinal',
      // yTicks = [10, "%"],
      tmpDAta = [];

    ChartData.reduce(function (res, value) {
      if (!res[value.County]) {
        res[value.County] = {
          County: value.County,
          "PM2.5_AVG": 0,
          Count: 0,
          Avg: 0
        };
        tmpDAta.push(res[value.County])
      }
      // console.log(value["PM2.5_AVG"]);
      res[value.County]["PM2.5_AVG"] += parseInt(isNaN(value["PM2.5_AVG"]) ? "0" : value["PM2.5_AVG"], 10);
      res[value.County].Count++;
      res[value.County].Avg = res[value.County]["PM2.5_AVG"] / res[value.County].Count;
      return res;
    }, {});
    console.log(tmpDAta);
    return (
      <BarTooltip
        data={tmpDAta}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
        xScale={xScale}
      // yTicks= {yTicks}
      >
        <SimpleTooltipStyle />
      </BarTooltip >
    );
  }
}
