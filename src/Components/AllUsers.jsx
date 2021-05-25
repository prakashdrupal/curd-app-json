import {
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getUsers , deleteUser} from "../Service/api";
import { Link } from 'react-router-dom'

const userStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#FFFFFF",
      fontSize: 20,
    },
  },
  row: {
    "& > *": {
      fontSize: 20,
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = userStyle();

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  }

  const deleteUserData = async (id) => {
      await deleteUser(id);
      getAllUsers();

  }

  return (
    <Table>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button varinat="contained" color="primary" style={{marginRight: 10}} component={ Link } to={`/edit/${user.id}`}>Edit</Button>
                <Button varinat="contained" color="secondary" onClick= {() => deleteUserData(user.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllUsers;
