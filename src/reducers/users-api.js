import {
  ADD_USER_ERROR,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../actions/users-api"

const initialState = {
  usersListLoading: false,
  usersList: [],
  usersListError: null,
  userSaveLoading: false,
  userSaveStatus: false,
  userSaveError: null,
};

export default function userApiReducer(state = initialState, action) {
  const type = action.type;
  switch (type) {
    case GET_USER_REQUEST:
      return { ...state, usersListLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, usersListLoading: false, usersList: action.payload };
    case GET_USER_ERROR:
      return {
        ...state,
        usersListLoading: false,
        usersListError: action.payload,
      };
    case ADD_USER_REQUEST:
      return { ...state, userSaveLoading: true };
    case ADD_USER_SUCCESS:
      return { ...state, userSaveLoading: false, userSaveStatus: true };
    case ADD_USER_ERROR:
      return {
        ...state,
        userSaveLoading: false,
        userSaveError: action.payload,
      };
    default:
      return state;
  }
}
