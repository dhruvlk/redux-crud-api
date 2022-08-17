import axios from "axios";
import { updateUserInStore } from '../actions/users-api';

const URL = `${process.env.REACT_APP_API}/users`;


function getUsersFromApi() {
  console.log(getUsersFromApi)
  return axios.get(URL, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  }
  )
}

function addUsersFromApi(data) {
  return axios.post(URL, data, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

function DeleteFromApi(id) {
  console.log(id)
  return axios.delete(`${URL}/${id}`, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

function editFromApi(data) {
  console.log(data)
  return axios.patch(`${URL}/${data}`, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

// function updateUser(payload, userId) {
//   return (dispatch) => {
//     return fetch(`${URL.base_users_url}/${userId}`, {
//       method: "PUT",
//       // headers: getHeaders(),
//       body: JSON.stringify(payload),
//     })
//       .then((res) => {
//         if (res.ok) {
//           dispatch(updateUserInStore({ payload: payload, userId: userId }));
//         }
//       })
//       .catch((err) => console.log(err));
//   }
// }

const UserServices = {
  getUsersFromApi,
  addUsersFromApi,
  DeleteFromApi,
  editFromApi
  // updateUser
}

export default UserServices
