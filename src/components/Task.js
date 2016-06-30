import { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { startTask, completeTask, projectId, id, name, description, state } = this.props
    const actionBtn = {
      "width": "200px",
      "height": "50px"
    }
    const singleTask = {
      "width": "200px",
      "display": "inline-block",
      "fontSize": "20px",
      "verticalAlign": "top",
      "marginTop": "30px",
      "lineHeight": "25px"
    }
    const taskDescription = {
      "fontWeight": "normal"
    }
    let actionButton = ''
    if (state === 'to-do') {
      actionButton = <button style={actionBtn} className='btn btn-primary' onClick={e => {
        e.preventDefault()
        startTask(projectId, id)
      }}>Start</button>
    }
    if (state === 'in-progress') {
      actionButton = <button style={actionBtn} className='btn btn-primary' onClick={e => {
        e.preventDefault()
        completeTask(projectId, id)
      }}>Complete</button>
    }
    return (
      <div>
        <h6 className={state}>
          <div style={singleTask}>{name}<br/><span style={taskDescription}>{description}</span></div>
          <div style={singleTask}>{actionButton}</div>
        </h6>
      </div>
    );
  }
}

Task.propTypes = {
  startTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}

export default Task;
