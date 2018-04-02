import { combineReducers } from 'redux';



const hobbiesReducer = (state, action) => {
  if (!state) {
    state = {
      hobbies: []
    }
  }
  switch (action.type) {
    case "fetchedHobbies":
      return {
        hobbies: action.hobbies
      }
    default:
      return {
        ...state
      }
  }
}

const userReducer = (state, action) => {
  if (!state) {
    state = {
      user: {
        username: "",
        id: null,
        last_login: ""
      },
      userLoggedIn: false,
    }
  }
  switch (action.type) {
    case "signedInUser":
      return {
        user: action.user,
        userLoggedIn: true,
        // lastLogin: action.user.lastLogin
      }
    default:
      return {
        ...state,
      }
  }
}

const modalReducer = (state, action) => {
  if (!state) {
    state = {
      isOpen: false,
      bodyComponent: ""
    }
  }
  if (action.type === "openModal") {
    return {
      isOpen: true,
      bodyComponent: action.bodyComponent
    }
  } else {
    return {
      isOpen: false,
      bodyComponent: ""
    }
  }

}

export default combineReducers({
  userReducer: userReducer,
  modalReducer: modalReducer,
  hobbiesReducer: hobbiesReducer
});