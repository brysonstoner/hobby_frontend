import React, { Component } from 'react';
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import axios from "axios";

class SignInModalBody extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: ""
    }

    this.closeModal = this.closeModal.bind(this);
    this.signIn = this.signIn.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }

  signIn() {
    axios.post('/signin', {
      username: this.state.username
    }).then((res)=>{
      this.props.dispatch({
        type:"signedInUser",
        user:res.data
      });
      axios.post('/getHobbies', {
        userId:res.data.id
      }).then((res)=>{
        this.props.dispatch({
          type:"fetchedHobbies",
          hobbies:res.data
        });
      });

      this.closeModal();
    });
  }

  changeUserName(e) {
    this.setState({
      username: e.target.value
    });
  }

  closeModal() {
    this.props.dispatch({
      type: 'closeModal'
    });
  }

  render() {
    return (
      <div>
        <ModalHeader>Sign In</ModalHeader>
        <ModalBody>
          <Input type="text" value={this.state.username} onChange={this.changeUserName} placeholder="username goes here" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.signIn}>Sign In</Button>{' '}
          <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
        </ModalFooter>
      </div>
    );
  }
}

export default connect((state) => (state.userReducer))(SignInModalBody);