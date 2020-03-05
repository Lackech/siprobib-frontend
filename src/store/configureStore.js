import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as Login from "./Login";


export default function configureStore(initialState) {

    const reducers = {
      login : Login.reducer,
    };
  
    const middleware = [
      thunk
    ];
  
      
    const rootReducer = combineReducers({
      ...reducers      
    });
  
    return createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    );
  }
  