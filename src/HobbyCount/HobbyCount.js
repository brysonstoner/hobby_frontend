import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  CardText
} from 'reactstrap';

class HobbyCount extends Component {
  render() {
    return (
      <div>
        <CardText>Hobby Count:{this.props.hobbies.length}</CardText>
      </div>
    )
  }
}

export default connect((state) => (state.hobbiesReducer))(HobbyCount);