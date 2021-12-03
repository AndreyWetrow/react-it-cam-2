import { connect } from "react-redux";
import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import Users from "./Users";
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersOnPages,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
  onGetArrayPages = (data) => {
    let maxPageLength = Math.ceil(data.length / this.props.pageSize);
    let usersObject = [];
    let newObj = [];
    let maxLength = data.length; //10
    let pageSize = this.props.pageSize; //3

    for (let i = 1; i <= maxPageLength; i++) {
      let count = maxLength > pageSize ? pageSize : maxLength;
      for (let j = 1; j <= count; j++) {
        newObj = j;
        maxLength--;
      }
      usersObject.push(newObj);
    }
    return usersObject;
  };
  onGetDisturbedArrayPages = (arrayPages, usersArrow) => {
    let totalArr = [];
    let j = 0;

    for (let i = 0; i < arrayPages.length; i++) {
      let newUserArrow = [];
      for (let k = 0; k < arrayPages[i]; k++) {
        newUserArrow.push(usersArrow[j]);
        j++;
      }
      totalArr.push({ id: i + 1, newUserArrow });
    }

    return totalArr;
  };
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => {
  //         this.props.setUsers(response.data);
  //       });
  //   }
  // };
  // componentWillUnmount() {
  //   this.props.setUsers([]);
  // }
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.pageSize);
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.props.setUsers(
        this.props.usersOnPages.find(
          (item) => item.id === this.props.currentPage
        ).newUserArrow
      );
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          userPhoto={userPhoto}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersOnPages: state.usersPage.usersOnPages,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     setUsersOnPages: (usersOnPages) => {
//       dispatch(setUsersOnPagesAC(usersOnPages));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersOnPages,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
