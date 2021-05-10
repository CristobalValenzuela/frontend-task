import React from "react";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function AddTodo({openDialog}) {
  return (
    <Button
      id={"add-todo"}
      variant="contained"
      onClick={openDialog}
      startIcon={<AddCircleOutlineIcon />}
    >
      Agregar
    </Button>
  );
}
