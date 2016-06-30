import _ from 'lodash'
import { Component, PropTypes } from 'react';
import Task from './Task'
import {Circle} from 'rc-progress'

class Project extends Component {
  render() {
    const { addTask, startTask, completeTask, id, name, description, tasks } = this.props
    const taskDOM = (task) => {
      return <Task
              key={task.id}
              startTask={startTask}
              completeTask={completeTask}
              projectId={id}
              {...task}
            />
    }
    let todoList = _.filter(tasks.list, t => t.state === 'to-do').map(taskDOM)
    let inProgressList = _.filter(tasks.list, t => t.state === 'in-progress').map(taskDOM)
    let completeList = _.filter(tasks.list, t => t.state === 'complete').map(taskDOM)
    let totalActiveTasks = todoList.length + inProgressList.length + completeList.length
    let toDoPercentage = 0
    let inProgressPercentage = 0
    let completePercentage = 0
    if (totalActiveTasks > 0){
      toDoPercentage = Math.round((tasks.todo/totalActiveTasks) * 100)
      inProgressPercentage = Math.round((tasks.inProgress/totalActiveTasks) * 100)
      completePercentage = Math.round((tasks.complete/totalActiveTasks) * 100)
    }
    let input
    let inputDescription
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
    const addTaskBtn = {
      "marginTop": "20px",
      "marginBottom": "50px",
      "width": "15%",
      "height": "50px"
    }

    return (
      <div>
        <h3>{name}</h3>
        <h4>{description}</h4>
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

        <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            addTask(id, input.value, inputDescription.value)
            input.value = ''
            inputDescription.value = ''
          }}>
            <h4>Task Name:</h4>
            <input placeholder='Name of the new task' className='form-control input-lg' ref={node => { input = node }} />
            <h4>Task Description:</h4>
            <input placeholder='Description of new task' className='form-control input-lg' ref={node => { inputDescription = node }} />
            <button style={addTaskBtn} className='btn btn-primary' type='submit'>Add Task</button>
          </form>
        </div>
        <h3 className='to-do'>To Do Tasks</h3>
        {todoList}
        <h3 className='in-progress'>In Progress Tasks</h3>
        {inProgressList}
      </div>
    );
  }
}

Project.propTypes = {
  addTask: PropTypes.func.isRequired,
  startTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.shape({
    count: PropTypes.number.isRequired,
    todo: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }))
  })
}

export default Project;
