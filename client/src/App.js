import React from "react";

import "./_variables.sass";
import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";

// import "bootstrap/scss/_variables.scss";
// import "bootstrap/scss/_mixins.scss";
// import "bootstrap/scss/_utilities.scss";
// import "bootstrap/scss/bootstrap-reboot.scss";
// import "bootstrap/scss/bootstrap-grid.scss";
// import "bootstrap/scss/_navbar.scss";


function App() {

  return (
    <div>
      <GlobalNavbar />
      
      <div className="container">
        <div className="row">
        </div>
        <div className="row">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </div>
    </div>
  );

}

export default App;
