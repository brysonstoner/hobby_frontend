import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import reducer from "./reducers";
import { createStore } from 'redux';

import HobbiesNav from "./Navbar/Navbar";
import Hobbies from "./Hobbies/Hobbies";
import HobbiesModal from "./HobbiesModal/HobbiesModal";
import HobbiesCard from "./HobbiesCard/HobbiesCard";

const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <HobbiesModal />
          <HobbiesNav />
          <div className="hobbiesContent">
            <Hobbies />
            <HobbiesCard />
          </div>
        </div >
      </Provider>
    );
  }
}

export default App;
