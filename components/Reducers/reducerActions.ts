export const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_DISPLAY_NAME: 'SET_DISPLAY_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PHONE_NUMBER: 'SET_PHONE_NUMBER',
//   SET_UID: 'SET_UID',
};

export const setUser = (payload: any) => ({
  type: ACTIONS.SET_USER,
  payload,
});
export const setDisplayName = (payload: any) => ({
  type: ACTIONS.SET_DISPLAY_NAME,
  payload,
});
export const setEmail = (payload: any) => ({
  type: ACTIONS.SET_EMAIL,
  payload,
});
export const setPhoneNumber = (payload: any) => ({
  type: ACTIONS.SET_PHONE_NUMBER,
  payload,
});

export const setLoggedIn = () => ({
  type: 'LOGIN',
});

export const setLoggedOut = () => ({
  type: 'LOGOUT',
});
