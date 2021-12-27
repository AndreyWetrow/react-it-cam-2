import { getAuthUserData } from "./auth-reduser";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  promise.then(() => {
    dispatch(initializedSuccess());
  });
  // dispatch(initializedSuccess());
};
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export default appReducer;
