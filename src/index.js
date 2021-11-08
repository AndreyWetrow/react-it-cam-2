import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogsData = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sanja" },
  { id: 4, name: "Vitaly" },
  { id: 5, name: "Ivan" },
];
let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hi, how you health" },
  { id: 3, message: "Hello, how are you" },
  { id: 4, message: "I`m crazy" },
  { id: 5, message: "I love layout" },
];
let posts = [
  { id: 1, message: "How are you", likesCount: 15 },
  { id: 2, message: "I'm fine", likesCount: 21 },
];

ReactDOM.render(
  <App dialogs={dialogsData} messages={messagesData} posts={posts} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ===============lesson newReactRouterDom================
// import "./lessons/newReactRouterDom/index";
