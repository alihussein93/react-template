import Enums from 'constants/enums';
// import Events from './events';

const initalState = {
  locale: Enums.locales.en_US,
  accessToken: '',
  accessTokenExpirationDate: '',
  authStatus: Enums.authStatuses.authenticated
};

const appReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
