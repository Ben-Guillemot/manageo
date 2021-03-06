import { createStore, applyMiddleware, compose } from 'redux';
import userMiddleware from '../middlewares/userMiddleware';
import reducer from '../reducers';

const allMiddlewares = applyMiddleware(
  userMiddleware,
);

//  to use redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allMiddlewaresWithReduxDevTools = composeEnhancers(
  allMiddlewares,
);

const store = createStore(
  reducer,
  allMiddlewaresWithReduxDevTools,
);

export default store;
