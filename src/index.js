import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "./StoreContext";

// import store from "./redux/store";
// import store from "./redux/store";

// const rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App
//         state={state}
//         addPost={addPost}
//         updateNewPostText={updateNewPostText}
//       />
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
// };
const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      {/*<StoreContext.Provider value={store}>*/}
      {/*  <App />*/}
      {/*</StoreContext.Provider> */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,

    document.getElementById("root")
  );
};

// rerenderEntireTree(store.getState());
rerenderEntireTree(store);

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
  // rerenderEntireTree(store.getState());
  rerenderEntireTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ===============lesson newReactRouterDom================
// import "./lessons/newReactRouterDom/index";
