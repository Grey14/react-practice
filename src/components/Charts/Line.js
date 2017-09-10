import React, { Component } from 'react';
import { LineChart } from 'react-d3-basic';

import ChartData from '../../data/user.json';

export default class Line extends Component {
  render() {
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    const chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
      // your x accessor
      xBar = function (d) {
        // console.log(d);
        return d.index;
      };

    return (
      <LineChart
        width={1200}
        height={300}
        data={ChartData}
        chartSeries={chartSeries}
        x={xBar}
      >
      </LineChart>
    );
  }
}
