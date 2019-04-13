import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore as _createStore } from "redux";
import DevTools from "../../containers/DevTools/DevTools";
import reducer from "./reducer";

// may help uncover errors, should be uncommon to use an action twice, would like to hide in production
import reduxDuplicateActions from "redux-duplicate-actions";
// import promiseMiddleware from 'redux-promise';

// overrides Redux's createStore
export default function createStore(history) {
  const middleware = [routerMiddleware(history), reduxDuplicateActions(false)];

  let enhancer;
  if (process.env.__DEVTOOLS__) {
    enhancer = compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    );
  } else {
    enhancer = compose(applyMiddleware(...middleware));
  }

  const store = _createStore(reducer(history), {}, enhancer);

  return store;
}
