import React from 'react';
import Timer from './Timer.jsx';
import TaskDescription from './TaskDescription.jsx';

export default class Task extends React.Component{

  render(){
    return (
      <section className="task">
        <TaskDescription description={this.props.description} />
        <Timer id={this.props.id} taskTimerStoppedCallback={this.props.taskTimerStoppedCallback} timeSpent={this.props.timeSpent} />
      </section>
    )
  }
}
