import React from 'react';
import logo from './logo.svg';

Number.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

export default class Timer extends React.Component {
  constructor(props){
    super(props)
    this.intervalId=null;
    this.toggleTimer = this.toggleTimer.bind(this);
    this.state = {
      running:false,
      timeSpent: this.props.timeSpent
    }
  }
  toggleTimer(e){
    let running = !this.state.running;
    this.setState({
      running:running
    });
    if(running){//can't rely on state, changes are not "immediate"
      this.intervalId = setInterval(()=>{

        this.setState({
          timeSpent: this.state.timeSpent+1
        })
      }, 1000)
    } else {
      clearInterval(this.intervalId);
      //console.log(this.state.timeSpent, this.props.id);
      this.props.taskTimerStoppedCallback(this.state.timeSpent, this.props.id)
      //pass time spent up the chain
    }
  }
  render(){
    const animated = this.state.running ? 'spin':'';
    return (
      <div className="timer">
        <img
          onClick={this.toggleTimer}
          src={logo}
          className={animated + ' App-logo'}
          alt="logo" />
        {this.state.timeSpent.toHHMMSS()}
      </div>
    )
  }
}
