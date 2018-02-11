import React, {Component} from 'react'
import { LineChart } from 'react-chartkick'

const data = [{"name": "Fund 1", "data": {"Jan":44, "Feb": 23, "Mar": 90}},
            {"name":"Fund 2", "data":{"Jan":20, "Feb": 68, "Mar": 78}},
              {"name": "Fund 1", "data":{"Jan": 98, "Feb": 23, "Mar": 61}}];


export default class Line_Chart extends Component {


  render(){
    return (
      <div>
      <LineChart data={data} />
      </div>
    )
  }
}
