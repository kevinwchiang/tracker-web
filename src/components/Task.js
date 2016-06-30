import { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { startTask, completeTask, projectId, id, name, state } = this.props
    let actionButton = ''
    if (state === 'to-do') {
      actionButton = <button onClick={e => {
        e.preventDefault()
        startTask(projectId, id)
      }}>Start</button>
    }
    if (state === 'in-progress') {
      actionButton = <button onClick={e => {
        e.preventDefault()
        completeTask(projectId, id)
      }}>Complete</button>
    }
    return (
      <div>
        <h6 className={state}>{name} {actionButton}</h6>
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
