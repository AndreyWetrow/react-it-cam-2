import "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <Header />
        <Navbar />

        <div className={classes.appWrapperContent}>
          <Routes>
            <Route
              path={"/profile"}
              element={<Profile posts={props.posts} />}
            />
            <Route
              path={"/dialogs"}
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
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
    </BrowserRouter>
  );
};

export default App;
