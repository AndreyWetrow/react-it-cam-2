import "./App.module.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <NavbarContainer />

      <div className={classes.appWrapperContent}>
        <Routes>
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/dialogs"} element={<DialogsContainer />} />
          <Route path={"/users"} element={<UsersContainer />} />
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
