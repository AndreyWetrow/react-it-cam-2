import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_USERS_ON_PAGES = "SET_USERS_ON_PAGES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  usersOnPages: [],
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case SET_USERS_ON_PAGES:
      return {
        ...state,
        usersOnPages: action.usersOnPages,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};
export const setUsersOnPages = (usersOnPages) => {
  return {
    type: SET_USERS_ON_PAGES,
    usersOnPages,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsers = (pageSize) => {
  const onGetArrayPages = (data) => {
    let maxPageLength = Math.ceil(data.length / pageSize);
    let usersObject = [];
    let newObj = [];
    let maxLength = data.length; //10
    // let pageSize =  pageSize; //3

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
  const onGetDisturbedArrayPages = (arrayPages, usersArrow) => {
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
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    userAPI.getUsers().then((data) => {
      dispatch(toggleIsFetching(false));

      dispatch(setUsers(data));
      dispatch(setTotalUsersCount(data.length));

      let arrayPages = onGetArrayPages(data);
      let usersArrow = [...data];

      dispatch(
        setUsersOnPages(onGetDisturbedArrayPages(arrayPages, usersArrow))
      );
      // ?????????????????????????????????
      // dispatch(
      //   setUsers(usersOnPages.find((item) => item.id === 1).newUserArrow)
      // );
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.follow(userId).then((response) => {
      if (response.status === 201) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.unfollow(userId).then((response) => {
      if (response.status === 201) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
