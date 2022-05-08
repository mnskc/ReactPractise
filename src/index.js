// Create a functional component called MyProject that returns the following UI:

// An h1 with the name of your project
// A paragraph to give a brief description of your project
// An ordered or unordered list to discuss 3 major skills used in this project
import React from "react";
import ReactDOM from "react-dom/client";
import MyProject from "./MyProject.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProject />
  </React.StrictMode>
);
