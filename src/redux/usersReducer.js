const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_USERS_ON_PAGES = "SET_USERS_ON_PAGES";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  usersOnPages: [],
  // users: [
  //   {
  //     id: 1,
  //     photoUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHfyUXpFU_i8g1PIp_T-hSSyb8PYePWprg&usqp=CAU",
  //     followed: true,
  //     fullName: "Tor",
  //     status: "I`m god",
  //     location: { city: "Arcana", country: "sky" },
  //   },
  //   {
  //     id: 2,
  //     photoUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHfyUXpFU_i8g1PIp_T-hSSyb8PYePWprg&usqp=CAU",
  //     followed: true,
  //     fullName: "Ironman",
  //     status: "I`m iron",
  //     location: { city: "New York", country: "USA" },
  //   },
  //   {
  //     id: 3,
  //     photoUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU",
  //     followed: false,
  //     fullName: "Spiderman",
  //     status: "I`m adroit",
  //     location: { city: "Philadelphia", country: "USA" },
  //   },
  // ],
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

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setUsersTotalCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};
export const setUsersOnPagesAC = (usersOnPages) => {
  return {
    type: SET_USERS_ON_PAGES,
    usersOnPages,
  };
};

export default usersReducer;
