import { Component, PropTypes } from 'react';
import _ from 'lodash'
import {Circle} from 'rc-progress'

class Chart extends Component {
  render() {
    const { tasks, type } = this.props
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

    return (
      <div style={circleContainerStyle}>
        <div style={counterStyle}>
          <span style={counterNumStyle}>{tasks.todo}</span> To Do
          <p>{type}%</p>
        </div>
        <Circle percent={type} strokeWidth="6" strokeColor={'#33ff33'} />
      </div>
    );
  }
}

export default Chart;