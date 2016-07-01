import { Component, PropTypes } from 'react';
import _ from 'lodash'
import {Circle} from 'rc-progress'

class Charts extends Component {
  render() {
    const { tasks } = this.props
    const circleContainerStyle = {
      "width": "30%",
      "height": "200px",
      "marginBottom": "300px",
      "marginTop": "100px",
      "marginLeft": "20px",
      "display": "inline-block"
    }
    const counterStyle = {
      "textAlign": "center",
      "marginBottom": "10px",
    }
    const counterNumStyle = {
      "color": "#33ff33",
      "fontSize": "20px",
    }

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
        <div style={circleContainerStyle}>
          <div style={counterStyle}>
            <span style={counterNumStyle}>{tasks.todo}</span> To Do
            <p>{toDoPercentage}%</p>
          </div>
          <Circle percent={toDoPercentage} strokeWidth="6" strokeColor={'#33ff33'} />
        </div>
        <div style={circleContainerStyle}>
          <div style={counterStyle}>
            <span style={counterNumStyle}>{tasks.inProgress}</span> In Progress
            <p>{inProgressPercentage}%</p>
          </div>
          <Circle percent={inProgressPercentage} strokeWidth="6" strokeColor={'#33ff33'} />
        </div>
        <div style={circleContainerStyle}>
          <div style={counterStyle}>
            <span style={counterNumStyle}>{tasks.complete}</span> Complete
            <p>{completePercentage}%</p>
          </div>
          <Circle percent={completePercentage} strokeWidth="6" strokeColor={'#33ff33'} />
        </div>
      </div>
    );
  }
}


export default Charts;