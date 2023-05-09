const INITIAL_STATE = {
  users: [],
  loading: false,
  error: false
};

export const ACTIONS = {
  GET_USERS: "GET_USERS"
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload.user,
        error: action.payload.error,
        loading: action.payload.loading
      };
    default:
      return state;
  }
};
