import React, { Component } from 'react';
import TaskList from './TaskList.jsx';
import TaskBar from './TaskBar.jsx';
//import logo from './logo.svg';
import './App.css';
//<img src={logo} className="App-logo" alt="logo" />
class App extends Component {
  constructor(props){
    super(props);
    this.newTaskAdded = this.newTaskAdded.bind(this);
    this.taskTimerStopped = this.taskTimerStopped.bind(this);
    /*
    localStorage.setItem('tasks',
      JSON.stringify(
        [
          {
            "id":1,
            "description":"Do CSS",
            "timeSpent": 0
          },
          {
            "id":2,
            "description":"Do JS",
            "timeSpent": 10
          }
        ]
      )
    )*/
  }
  componentWillMount(){
    let tasks = localStorage.getItem('tasks');
    if(tasks){
      tasks = JSON.parse(tasks);
    } else {
      tasks=[];
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.setState({
      tasks:tasks
    });
  }
  newTaskAdded(text){
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    let tasks = this.state.tasks;
    tasks.push({
      "id": guid(),
      "description":text,
      "timeSpent": 0
    })
    this.setState({
        tasks:tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  taskTimerStopped(time, id){
    let tasks = this.state.tasks;
    let x = tasks.findIndex((task)=>
      task.id===id
    );
    tasks[x].timeSpent=time;
    this.setState({
        tasks:tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ReactTimer</h2>
        </div>
        <TaskBar submitHandler={this.newTaskAdded} />
        <TaskList tasks={this.state.tasks} taskTimerStoppedCallback={this.taskTimerStopped} />
      </div>
    );
  }
}

export default App;
