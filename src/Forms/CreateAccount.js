import React, { Component } from 'react';
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import axios from 'axios';

class CreateAccountModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: "",
      hobby1Name: "",
      hobby1Skill: "",
      hobby2Name: "",
      hobby2Skill: ""
    };

    this.closeModal = this.closeModal.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.hobby1NameChange = this.hobby1NameChange.bind(this);
    this.hobby1SkillChange = this.hobby1SkillChange.bind(this);
    this.hobby2NameChange = this.hobby2NameChange.bind(this);
    this.hobby2SkillChange = this.hobby2SkillChange.bind(this);
  }

  createAccount() {
    axios.post('/createAccount', {
      username:this.state.username,
      hobby1Name:this.state.hobby1Name,
      hobby1Skill:this.state.hobby1Skill,
      hobby2Name:this.state.hobby2Name,
      hobby2Skill:this.state.hobby2Skill       
    }).then(()=>{
      this.closeModal();
    })
  }

  // CHALLENGE - all this binding and input handling is horrendous and terrible for performance. 
  // I'd reckon theres a better way to handle this. 
  // Using redux and reusing a component, rewrite the inputs so there's not so much redundancy and we aren't using
  // react's state (using redux instead)

  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  hobby1NameChange(e) {
    this.setState({
      hobby1Name: e.target.value
    });
  }

  hobby2NameChange(e) {
    this.setState({
      hobby2Name: e.target.value
    });
  }

  hobby1SkillChange(e) {
    this.setState({
      hobby1Skill: e.target.value
    });
  }

  hobby2SkillChange(e) {
    this.setState({
      hobby2Skill: e.target.value
    });
  }

  closeModal() {
    this.props.dispatch({
      type: "closeModal"
    });
  }

  render() {
    return (
      <div>
        <ModalHeader>Sign In</ModalHeader>
        <ModalBody>
          <Input onChange={this.usernameChange} value={this.state.username} placeholder="username goes here" type="text" />
          <br />
          <Input onChange={this.hobby1NameChange} type="text" value={this.state.hobby1Name} placeholder="Favorite Hobby 1 name" />
          <Input onChange={this.hobby1SkillChange} type="number" value={this.state.hobby1Skill} placeholder="Favorite Hobby 1 skill level" />
          <br />
          <Input onChange={this.hobby2NameChange} type="text" value={this.state.hobby2Name} placeholder="Favorite Hobby 2 name" />
          <Input onChange={this.hobby2SkillChange} type="number" value={this.state.hobby2Skill} placeholder="Favorite Hobby 2 skill level" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.createAccount}>Create Account</Button>{' '}
          <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
        </ModalFooter>
      </div>
    );
  }
}

export default connect((state) => (state))(CreateAccountModal);
