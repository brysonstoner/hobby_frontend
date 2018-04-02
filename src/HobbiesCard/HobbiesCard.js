import React, { Component } from 'react';
import {
  Card, 
  CardBody
} from 'reactstrap';

import "./hobbiesCard.css";

import LastLogin from "../LastLogin/LastLogin";
import HobbyCount from "../HobbyCount/HobbyCount";

export default class HobbiesCard extends Component {
  render() {
    return (
      <div className="hobbiesCard">
        <Card>
          <CardBody>
            <LastLogin />
            <HobbyCount />
          </CardBody>
        </Card>
      </div>
    )
  }

}