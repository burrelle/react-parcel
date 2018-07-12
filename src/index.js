import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Content from "./components/content.jsx";
import Home from "./components/home.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <Route path="/docs" component={Content} />
          {/* <Route path="/faq" componet={} />       */}
          <Route exact path="/" component={Home} />
        </div>
    </Router>
  );
};
render(<App />, document.getElementById("app"));
