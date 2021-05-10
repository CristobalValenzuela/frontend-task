import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";

const formatDate = (textDate) => {
  let date = new Date(textDate);
  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var year = date.getFullYear();
  return day + "/" + month + "/" + year;
};

export function Todo({ key, todo, toggleTodo, removeTodo, setTodo }) {
  if (todo) {
    return (
      <TableRow key={key}>
        <TableCell align="center">
          <Button onClick={() => toggleTodo(todo)}>
            {todo.vigente ? <DoneIcon /> : <CloseIcon />}
          </Button>
        </TableCell>
        <TableCell >{todo.descripcion}</TableCell>
        <TableCell align="center">{formatDate(todo.fechaCreacion)}</TableCell>
        <TableCell align="center">
          <Button onClick={() => setTodo(todo)}>
            <EditIcon />
          </Button>
          <Button onClick={() => removeTodo(todo)}>
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
export default connect(null, { toggleTodo, removeTodo })(Todo);
