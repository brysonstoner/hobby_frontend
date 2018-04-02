import { combineReducers } from 'redux';

const userReducer = (state, action) => {
  if (!state) {
    state = {
      username: "",
      lastLogin: ""
    }
  }
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}

const modalReducer = (state, action) => {
  if (!state) {
    state = {
      isOpen: false,
      bodyComponent:""
    }
  }
  if (action.type === "openModal"){
    return {
      isOpen:true,
      bodyComponent: action.bodyComponent
    }
  } else {
    return {
      isOpen:false,
      bodyComponent:""
    }
  } 

}


export default combineReducers({
  userReducer: userReducer,
  modalReducer: modalReducer
});