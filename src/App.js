import "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// const App = ({ posts, messages, dialogs }) => {
// const App = ({ state, addPost, updateNewPostText }) => {
// const App = ({ state, dispatch }) => {
const App = (props) => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navbar state={props.store.getState().sidebar} />

      <div className={classes.appWrapperContent}>
        <Routes>
          <Route path={"/profile"} element={<Profile store={props.store} />} />
          <Route
            path={"/dialogs"}
            // element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />}
            element={<DialogsContainer store={props.store} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
