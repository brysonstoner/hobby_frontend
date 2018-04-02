import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';

class SignInModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    var modalContent;
    if (this.props.bodyComponent){
      modalContent = < this.props.bodyComponent />
    }
    return (
      <div>
        <Modal isOpen={this.props.isOpen} >
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default connect((state)=>(state.modalReducer))(SignInModal);