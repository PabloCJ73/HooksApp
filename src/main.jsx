import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCumstomHook } from "./01-useState/CounterWithCumstomHook";
// import { SimpleForms } from "./02-UseEffect/SimpleForms";
// import { FormsWithCustomHook } from "./02-UseEffect/FormsWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // {/* <HooksApp /> */}
  // {/* <CounterApp /> */}
  // {/* <CounterWithCumstomHook /> */}
  // <SimpleForms />
  // <FormsWithCustomHook />
  <MultipleCustomHooks />
  // {/* </React.StrictMode> */}
);
