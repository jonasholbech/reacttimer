import React from 'react';

export default class TaskBar extends React.Component {
  constructor(props){
    super(props);
    this.textChanged=this.textChanged.bind(this);
    this.submitted=this.submitted.bind(this);
    this.state = {
      tasktext:''
    }
  }
  textChanged(e){
    this.setState({
      tasktext:e.target.value
    });
  }
  submitted(e){
    e.preventDefault();
    this.props.submitHandler(this.state.tasktext)
  }
  render (){
    return (
      <section className="taskbar">
        <div className="taskform">
          <form onSubmit={this.submitted}>
            <input placeholder="Add task" type="text" onChange={this.textChanged} value={this.state.tasktext} />
            <input type="submit" onClick={this.submitted} value="Save" />
          </form>
        </div>
      </section>
    );
  }
}
