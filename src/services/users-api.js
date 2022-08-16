import axios from "axios";

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
  console.log("--------------->", data)
  return axios.post(URL, data, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

const UserServices = {
  getUsersFromApi,
  addUsersFromApi
}

export default UserServices
