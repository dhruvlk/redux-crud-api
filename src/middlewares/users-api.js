import {
  addUserError,
  addUserRequest,
  addUserSuccess,
  getUserError,
  getUserRequest,
  getUserSuccess,
} from "../actions/users-api"
import UserServices from "../services/users-api"

export function getUsersFromApiMiddleware() {
  return (dispatch) => {
    dispatch(getUserRequest());
    UserServices.getUsersFromApi()
      .then((res) => {
        const { data } = res;
        dispatch(getUserSuccess(data));
      })
      .catch((error) => {
        console.log(error)
        dispatch(getUserError(error));
      });
  };
}

export function addUsersFromApiMiddleware(data) {
  return (dispatch) => {
    dispatch(addUserRequest());
    UserServices.addUsersFromApi(data)
      .then((res) => {
        const { data } = res;
        dispatch(addUserSuccess(data));
      })
      .catch((error) => {
        dispatch(addUserError(error));
      });
  };
}
