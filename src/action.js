import { ACTIONS } from "./userReducer";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.GET_USERS,
      payload: {
        error: false,
        users: [],
        loading: true
      }
    });
    fetch("fooo")
      .then((res) => {
        res
          .json()
          .then((res2) => {})
          .catch((err) => {
            dispatch({
              type: ACTIONS.GET_USERS,
              payload: {
                error: true,
                users: [],
                loading: false
              }
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: ACTIONS.GET_USERS,
          payload: {
            error: true,
            users: [],
            loading: false
          }
        });
      });
  };
};
