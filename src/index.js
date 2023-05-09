import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import App from "./App";
import thunk from "redux-thunk";
import { ACTIONS, userReducer } from "./userReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const customMiddleWare = (store) => (next) => (action) => {
  if (action.type === ACTIONS.GET_USERS) {
    console.log("API call is being made");
  }
  next(action); // keep it outside the if block otherwise next action wont be executed
};
const reducers = combineReducers({
  userReducer: userReducer
});

const store = createStore(reducers, applyMiddleware(customMiddleWare, thunk));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
