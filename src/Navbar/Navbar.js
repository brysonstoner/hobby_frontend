import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { connect } from "react-redux";
import SignIn from "../Forms/SignIn";
import CreateAccount from "../Forms/CreateAccount";

class HobbiesNav extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.openCreateAccountModal = this.openCreateAccountModal.bind(this);
    this.openSignInModal = this.openSignInModal.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openCreateAccountModal(){
    this.props.dispatch({
      type:"openModal",
      bodyComponent:CreateAccount
    })
  }

  openSignInModal(){
    this.props.dispatch({
      type: "openModal",
      bodyComponent:SignIn
    });
  }

  render() {
    var userMessage;
    if(this.props.userLoggedIn){
      userMessage = <div> You are logged in as: {this.props.user.username}</div>
    } else {
      userMessage = <div> Not Logged in </div>
    }
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"> Hobby Manager </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink >{userMessage} </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.openSignInModal}>
                    Sign In
                </DropdownItem>
                  <DropdownItem onClick={this.openCreateAccountModal}>
                    Create Account
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect((state)=>(state.userReducer))(HobbiesNav)