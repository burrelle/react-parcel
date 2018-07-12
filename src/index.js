import React from "react";
import { render } from "react-dom";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Content from "./components/content.jsx";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="h-full overflow-hidden flex pt-24">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};
render(<App />, document.getElementById("app"));
