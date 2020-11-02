import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';

const appReducers = combineReducers({
  app: appReducer
});

const rootReducer = (state, action) => appReducers(state, action);
// if (action.type === actionTypes.SIGN_OUT) {
//     state = undefined;
// }
export default rootReducer;
