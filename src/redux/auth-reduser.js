import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

// export const signInUser = () => {
//   return (dispatch) => {
//     try {
//       authAPI.me().then((response) => {
//         let { localId, kind, email } = response.data;
//         if (response.data.registered) {
//           dispatch(setAuthUserData(localId, email, kind));
//         }
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };

export const getAuthUserData = () => async (dispatch) => {
  try {
    let response = await authAPI.me();
    let { localId, kind, email } = response.data;

    if (response.data.registered) {
      dispatch(setAuthUserData(localId, email, kind, true));
    }
  } catch (e) {
    console.log(e);
  }
};
// export const Login = (email, password, rememberMe) => (dispatch) => {
//   try {
//     authAPI.me().then((response) => {
//       let { localId, kind, email } = response.data;
//       if (response.data.registered) {
//         dispatch(setAuthUserData(localId, email, kind));
//       }
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
export const login = (email, password, rememberMe) => (dispatch) => {
  try {
    authAPI.login(email, password, rememberMe).then(
      (response) => {
        // let { localId, kind, email } = response.data;

        if (response.data.registered) {
          dispatch(getAuthUserData());
        } else {
          // dispatch(stopSubmit("login", { _error: "Common error" }));
        }
      },
      (response) => {
        console.log(response);
        dispatch(stopSubmit("login", { _error: "Common error" }));
      }
    );
  } catch (e) {
    console.log(e);
  }
};
export const logout = () => (dispatch) => {
  try {
    authAPI.logout().then((response) => {
      console.log(response.data);
      dispatch(setAuthUserData(null, null, null, false));
      // let { localId, kind, email } = response.data;
      // if (response.data.registered) {
      //   dispatch(setAuthUserData(localId, email, kind));
      // }
    });
  } catch (e) {
    console.log(e);
  }
};

export default authReducer;
