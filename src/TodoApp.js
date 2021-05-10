import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  CardActions,
} from "@material-ui/core";
import TaskDialog from "./components/TaskDialog";

export default function TodoApp() {
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState();

  const handleSetTodo = (todo) => {
    setTodo(todo);
    setOpen(true);
  }

  const handleClickOpen = () => {
    setTodo(undefined);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Card>
          <CardHeader
            title="Lista de Tareas"
            action={<AddTodo openDialog={handleClickOpen} />}
          />
          <CardContent>
            <TodoList setTodo={handleSetTodo}/>
          </CardContent>
          <CardActions disableSpacing>
            <VisibilityFilters />
          </CardActions>
        </Card>
      </Container>
      <TaskDialog handleClose={handleClose} open={open} todo={todo}/>
    </div>
  );
}
