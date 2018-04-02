import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
   CardText
} from 'reactstrap';

class LastLogin extends Component {
  render() {
    return (
      <div>
        <CardText>Last Login:{this.props.user.last_login}</CardText>
      </div>
    )
  }
}

export default connect((state) => (state.userReducer))(LastLogin);