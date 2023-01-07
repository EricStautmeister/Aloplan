import { AnyAction } from 'redux';

export const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_DISPLAY_NAME: 'SET_DISPLAY_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PHONE_NUMBER: 'SET_PHONE_NUMBER',
//   SET_UID: 'SET_UID',
};

//REDUCER
const initialState = {
  displayName: null,
  email: null,
  phoneNumber: null,
//   uid: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const userReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_USER:
      return {
        displayName: payload.displayName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        // uid: payload.uid,
      };

    case ACTIONS.SET_DISPLAY_NAME:
      // eslint-disable-next-line no-param-reassign
      state.displayName = payload.displayName;
      return state;

    case ACTIONS.SET_EMAIL:
      // eslint-disable-next-line no-param-reassign
      state.email = payload.displayName;
      return state;

    case ACTIONS.SET_PHONE_NUMBER:
      // eslint-disable-next-line no-param-reassign
      state.phoneNumber = payload.phoneNumber;
      return state;

    // case ACTIONS.SET_UID:
    //   // eslint-disable-next-line no-param-reassign
    //   state.uid = payload.uid;
    //   return state;

    default:
      return state;
  }
};
export default userReducer;
