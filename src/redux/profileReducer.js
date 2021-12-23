import { profileAPI, userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "How are you", likesCount: 15 },
    { id: 2, message: "I'm fine", likesCount: 21 },
    { id: 3, message: "Hello", likesCount: 151 },
  ],

  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: "",
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await userAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data.company.bs));
};
export const updateStatus = (userId, status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(userId, status);

  if (response.data) {
    dispatch(setStatus(status));
  }
};
// export const updateStatus = (status) => (dispatch) => {
//   profileAPI.updateStatus(status).then((response) => {
//     if (response.data) {
//       dispatch(setStatus(status));
//     }
//   });
// };

export default profileReducer;
