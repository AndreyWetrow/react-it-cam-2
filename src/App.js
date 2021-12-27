import "./App.module.scss";
import React, { Suspense } from "react";
import classes from "./App.module.scss";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <NavbarContainer />

        <div className={classes.appWrapperContent}>
          <Route
            path={"/profile/:userId?"}
            // render={
            //   // withSuspense(ProfileContainer)
            //   <Suspense fallback={<div>Loading...</div>}>
            //     <ProfileContainer />
            //   </Suspense>
            //   // <DialogsContainer />;
            // }
            render={withSuspense(ProfileContainer)}
          />
          <Route
            path={"/dialogs"}
            // render={() => {
            //   return (
            //     <Suspense fallback={<div>Loading...</div>}>
            //       <DialogsContainer />
            //     </Suspense>
            //   );
            //   // <DialogsContainer />;
            // }}
            render={withSuspense(DialogsContainer)}
          />
          <Route path={"/users"} render={() => <UsersContainer />} />
          <Route path={"/login"} render={() => <LoginPage />} />
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
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);

const SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJsApp;

// export default compose(
//   withRouter,
//   connect(mapStateToProps, {
//     initializeApp,
//   })
// )(App);
