import { Component, PropTypes } from 'react';
import _ from 'lodash'
import {Circle} from 'rc-progress'
import Chart from './Chart'

class Charts extends Component {
  render() {
    const { tasks } = this.props

    let totalActiveTasks = tasks.count
    let toDoPercentage = 0
    let inProgressPercentage = 0
    let completePercentage = 0
    if (totalActiveTasks > 0){
      toDoPercentage = Math.round((tasks.todo/totalActiveTasks) * 100)
      inProgressPercentage = Math.round((tasks.inProgress/totalActiveTasks) * 100)
      completePercentage = Math.round((tasks.complete/totalActiveTasks) * 100)
    }
    return (
      <div>
        <Chart tasks={tasks} type={toDoPercentage}/>
        <Chart tasks={tasks} type={inProgressPercentage}/>
        <Chart tasks={tasks} type={completePercentage}/>
      </div>
      
    );
  }
}

export default Charts;