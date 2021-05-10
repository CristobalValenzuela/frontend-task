import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { fetchData } from "../redux/actions";

export function TodoList({ todos, onFetchData, setTodo }) {
  React.useEffect(() => {
    onFetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead stickyHeader aria-label="sticky table" style={{backgroundColor:'#CACACA'}}>
          <TableRow>
            <TableCell align="center">Vigente</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, index) => {
            return (
              <Todo key={`todo-${todo.id}`} todo={todo} setTodo={setTodo} />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) };
};

export default connect(mapStateToProps, mapDispatchprops)(TodoList);
