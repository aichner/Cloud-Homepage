//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

//> Images
// Logo of Advertisement Agency Christian Aichner
import { ReactComponent as Logo } from "../../../assets/logo.svg";

//> CSS
import "./LandingPage.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <MDBContainer>
          <div className="flex-center">
            <div className="mb-5">
              <Logo id="logo" />
            </div>
            <div className="text-center main-content">
              <MDBIcon icon="cloud" size="2x" />
              <h2 className="font-weight-bold mb-0">
                aichner<span>.cloud</span>
              </h2>
            </div>
            <div className="text-muted mb-2">
              Web Services built and provided by us.
            </div>
            <div>
              <a
                href="https://www.github.com/aichner"
              >
                <MDBBtn color="elegant">
                  <MDBIcon fab icon="github" className="pr-1" /> Github
                </MDBBtn>
              </a>
            </div>
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
