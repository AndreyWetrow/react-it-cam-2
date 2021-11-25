import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg";
import Users from "./Users";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersOnPagesAC,
  setUsersTotalCountAC,
  unfollowAC,
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  onGetArrayPages = (response) => {
    let maxPageLength = Math.ceil(response.data.length / this.props.pageSize);
    let usersObject = [];
    let newObj = [];
    let maxLength = response.data.length; //10
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
      axios
        // .get("https://swapi.dev/api/planets")
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // axios.get("https://swapi.dev/api/people").then((response) => {

          this.props.setUsers(response.data);
          this.props.setTotalUsersCount(response.data.length);

          let arrayPages = this.onGetArrayPages(response);
          let usersArrow = [...response.data];

          this.props.setUsersOnPages(
            this.onGetDisturbedArrayPages(arrayPages, usersArrow)
          );

          this.props.setUsers(
            this.props.usersOnPages.find((item) => item.id === 1).newUserArrow
          );
        });
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
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        userPhoto={userPhoto}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    setUsersOnPages: (usersOnPages) => {
      dispatch(setUsersOnPagesAC(usersOnPages));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
