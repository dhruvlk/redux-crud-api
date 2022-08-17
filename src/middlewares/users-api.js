import {
  addUserError,
  addUserRequest,
  addUserSuccess,
  getUserError,
  getUserRequest,
  getUserSuccess,
  deleteUserError,
  deleteUserRequest,
  deleteUserSuccess,
  editUserError,
  editUserRequest,
  editUserSuccess,
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

export function deleteUsersFromApiMiddleware(id) {
  return (dispatch) => {
    dispatch(deleteUserRequest());
    UserServices.DeleteFromApi(id)
      .then((res) => {
        const { id } = res;
        dispatch(deleteUserSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteUserError(error));
      });
  };
}

export function editUsersFromApiMiddleware(data) {
  return (dispatch) => {
    dispatch(editUserRequest());
    UserServices.editFromApi(data)
      .then((res) => {
        const { data } = res;
        dispatch(editUserSuccess(data));
      })
      .catch((error) => {
        dispatch(editUserError(error));
      });
  };
}
