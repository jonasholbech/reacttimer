import React from 'react';
import Task from './Task.jsx';

export default class TaskList extends React.Component{

  render(){
    const tasks = this.props.tasks.map((task, i)=>{
      return <Task
        description={task.description}
        timeSpent={task.timeSpent}
        id={task.id}
        taskTimerStoppedCallback={this.props.taskTimerStoppedCallback}
        key={i} />
    })
    return (
      <div>
        {tasks}
      </div>
    )
  }
}
