import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    // userAPI.getProfile(userId).then((response) => {
    //   this.props.setUserProfile(response.data);
    // });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users/" + userId)
    //   .then((response) => {
    //     this.props.setUserProfile(response.data);
    //   });
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  withUrlDataContainerComponent
);
