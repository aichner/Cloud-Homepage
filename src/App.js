//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Components
//LandingPage
import { LandingPage } from "./components/pages";

class App extends React.Component {
  render() {
    return <LandingPage />;
  }
}

export default App;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
