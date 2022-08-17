import React, { useEffect, useState } from "react";
import {
  addUsersFromApiMiddleware,
  getUsersFromApiMiddleware,
  deleteUsersFromApiMiddleware,
  editUsersFromApiMiddleware,
} from "../middlewares/users-api";
// import { updateUser } from "../services/users-api";

import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UsersAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  // const [deleteId, setDeleteId] = useState();
  const dispatch = useDispatch();
  const { usersListLoading, usersList, userSaveLoading, userSaveStatus, id } =
    useSelector((state) => state.userApiReducer);

  useEffect(() => {
    dispatch(getUsersFromApiMiddleware());
  }, []);

  useEffect(() => {
    if (!userSaveLoading) {
      if (userSaveStatus) {
        dispatch(getUsersFromApiMiddleware());
      }
    }
  }, [userSaveLoading, userSaveStatus]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleStatusChange = (e) => {
    console.log("--------------------->", e.target.value);
    setStatus(e.target.value);
  };
  const handleDelete = (id) => {
    let choice = window.confirm("Are you sure you want to DELETE this record?");
    if (!choice) {
      return;
    }
    dispatch(deleteUsersFromApiMiddleware(id));
    window.alert("User deleted successfully!");
  };

  const handleEdit = (id) => {
    console.log(id);
    dispatch(editUsersFromApiMiddleware(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUsersFromApiMiddleware({
        name,
        email,
        gender,
        status,
      })
    );
  };

  return (
    <>
      {usersListLoading && <Skeleton count={15} />}
      <Table cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          {usersList.map((_) => {
            return (
              <tr>
                <td>{_.id}</td>
                <td>{_.name}</td>
                <td>{_.email}</td>
                <td>{_.gender}</td>
                <td>{_.status}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                    onClick={() => handleEdit(_)}
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                    onClick={() => handleDelete(_.id)}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input type="text" name="name" value={name} onChange={handleChange} />
        Email:{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <br />
        <input
          type="radio"
          id="html"
          name={gender}
          value="male"
          onChange={handleGenderChange}
        />
        <label>Male</label>
        <input
          type="radio"
          id="css"
          name={gender}
          value="female"
          onChange={handleGenderChange}
        />
        <label>Female</label>
        &nbsp;&nbsp;
        <br />
        <br />
        <label>Status</label>
        <select id="status" onChange={handleStatusChange}>
          <option>Select status</option>
          <option name={status} value="active">
            Active
          </option>
          <option name={status} value="inactive">
            Inactive
          </option>
        </select>
        <button type="submit" disabled={userSaveLoading}>
          {userSaveLoading ? "Loading..." : "Save"}
        </button>
      </form>
    </>
  );
};

export default UsersAPI;
