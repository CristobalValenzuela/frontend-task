import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { addTodo, editTodo } from "../redux/actions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export function TaskDialog({ open, todo, handleClose, addTodo, editTodo }) {
  const [value, setValue] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [switchValue, setSwitchValue] = React.useState(false);

  const handleAddTodo = () => {
    if (todo === undefined) {
      addTodo(
        {
          descripcion: value,
          fechaCreacion: selectedDate,
          vigente: switchValue
        }
      );
    } else {
      todo.descripcion = value;
      todo.fechaCreacion = selectedDate;
      todo.vigente = switchValue;
      editTodo(todo);
    }
    setValue("");
    setSelectedDate(new Date());
    setSwitchValue(false);
  };

  React.useEffect(() => {
    if (todo !== undefined) {
      console.log(todo);
      setValue(todo.descripcion);
      setSelectedDate(todo.fechaCreacion);
      setSwitchValue(todo.vigente);
    } else {
      setValue("");
      setSelectedDate(new Date());
      setSwitchValue(false);
    }
  }, [todo]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {todo === undefined ? "Nueva Tarea" : "Editar Tarea"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={3}>
              <Grid item xs={3} style={{ alignSelf: "self-end" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Descripcion
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={3} style={{ alignSelf: "self-end" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Fecha
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid item xs={3} style={{ alignSelf: "self-end" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Vigente
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Switch
                  onChange={() => setSwitchValue(!switchValue)}
                  checked={switchValue}
                  color="default"
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              handleAddTodo();
              handleClose();
            }}
            color="primary"
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
}

export default connect(null, { addTodo, editTodo })(TaskDialog);
