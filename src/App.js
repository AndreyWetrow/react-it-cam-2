import "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";

// const App = ({ posts, messages, dialogs }) => {
// const App = ({ state, addPost, updateNewPostText }) => {
const App = ({ state, dispatch }) => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navbar state={state.sidebar} />

      <div className={classes.appWrapperContent}>
        <Routes>
          <Route
            path={"/profile"}
            element={
              <Profile profilePage={state.profilePage} dispatch={dispatch} />
            }
          />
          <Route
            path={"/dialogs"}
            element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />}
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
