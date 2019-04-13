import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// import multireducer from "multireducer";
// import { reducer as reduxAsyncConnect }   from 'redux-async-connect';

import auth from "../reducers/auth";

export default history =>
  combineReducers({
    router: connectRouter(history),
    // reduxAsyncConnect,
    auth
    // multireducer: multireducer({
    //     counter1: counter,
    //     counter2: counter,
    //     counter3: counter
    // })
  });
