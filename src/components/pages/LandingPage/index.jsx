//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";

//> Images
// Logo of Advertisement Agency Christian Aichner
import AgencyLogo from "../../../assets/agency-small.png";

//> CSS
import "./LandingPage.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <MDBContainer>
          <div className="flex-center">
            <div>
              <img src={AgencyLogo} height="50px" />
            </div>
            <div className="text-center">Aichner Cloud</div>
            <div className="text-1">Web Services built and provided by us</div>
          </div>
        </MDBContainer>
      </>
    );
  }
}

export default LandingPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
