export const getName = state => state.auth.user?.name;
export const getEmail = state => state.auth.user.email;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsLoader = state => state.auth.isLoader;
export const getToken = state => state.auth.loginToken;
export const getRegister = state => state.auth.isRegister;
