import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends Component {
  // userId = this.props.match.params.userId ? this.props.match.params.userId : 2;

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    // this.props.updateStatus(userId, "1212");
    this.props.getUserStatus(userId);
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
    // console.log("RENDER PROFILE");
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        userId={
          this.props.match.params.userId ? this.props.match.params.userId : 2
        }
      />
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("mapStateToProps PROFILE");
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, { getUserProfile })(
//   withUrlDataContainerComponent
// );
