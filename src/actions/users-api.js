export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST,
  };
}

export function getUserSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
}

export function getUserError(error) {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
}

export function addUserRequest() {
  return {
    type: ADD_USER_REQUEST,
  };
}

export function addUserSuccess(data) {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
}

export function addUserError(error) {
  return {
    type: ADD_USER_ERROR,
    payload: error,
  };
}
