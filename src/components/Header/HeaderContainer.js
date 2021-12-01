import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reduser";

class HeaderContainer extends Component {
  componentDidMount() {
    const authData = {
      email: "test5@mail.ru",
      password: "123456",
      returnSecureToken: true,
      // withCredentials: true,
    };
    try {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKoDlTwYXzV1-ggaXVU23GE3NBTf7z-5o",
          // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKoDlTwYXzV1-ggaXVU23GE3NBTf7z-5o",
          authData
        )
        .then((response) => {
          let { localId, kind, email } = response.data;
          console.log(response.data);
          console.log(this.props);
          if (response.data.registered) {
            this.props.setAuthUserData(localId, email, kind);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
