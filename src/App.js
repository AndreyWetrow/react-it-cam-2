import "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";

// const App = ({ posts, messages, dialogs }) => {
// const App = ({ state, addPost, updateNewPostText }) => {
// const App = ({ state, dispatch }) => {
const App = (props) => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <StoreContext.Consumer>
        {(store) => {
          return <Navbar state={store.getState().sidebar} />;
        }}
      </StoreContext.Consumer>

      <div className={classes.appWrapperContent}>
        <Routes>
          <Route path={"/profile"} element={<Profile />} />
          <Route
            path={"/dialogs"}
            // element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />}
            element={<DialogsContainer />}
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
