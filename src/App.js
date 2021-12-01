import "./App.module.scss";
import classes from "./App.module.scss";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className={classes.appWrapper}>
      <HeaderContainer />
      <NavbarContainer />

      <div className={classes.appWrapperContent}>
        <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
        <Route path={"/dialogs"} render={() => <DialogsContainer />} />
        <Route path={"/users"} render={() => <UsersContainer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </div>
    </div>
  );
};

export default App;
