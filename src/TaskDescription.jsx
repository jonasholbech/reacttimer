import React from 'react';

export default class TaskDescription extends React.Component {
  render(){
    return (
      <h1>{this.props.description}</h1>
    )
  }
}
