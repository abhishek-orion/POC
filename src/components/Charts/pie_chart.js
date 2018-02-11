import React, {Component} from 'react'
import { PieChart } from 'react-chartkick'

export default class Pie_Chart extends Component {

  render(){
    return (
      <div className ="chart">
      <PieChart data={{"Blueberry": 44, "Strawberry": 23}} />
      </div>
    )
  }
}
