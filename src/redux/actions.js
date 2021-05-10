import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_FILTER,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (task) => {
  return (dispatch) => {
    return fetch("/api/task", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(task), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: ADD_TODO, task: json }))
      .catch((err) => dispatch({ type: FETCH_DATA_ERROR, msg: err }));
  };
};

export const toggleTodo = (task) => {
  task.vigente = !task.vigente;
  return (dispatch) => {
    return fetch("/api/task", {
      method: "PUT", // or 'PUT'
      body: JSON.stringify(task), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: TOGGLE_TODO, task: json }))
      .catch((err) => dispatch({ type: FETCH_DATA_ERROR, msg: err }));
  };
}

export const editTodo = (task) => {
  return (dispatch) => {
    return fetch("/api/task", {
      method: "PUT", // or 'PUT'
      body: JSON.stringify(task), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: TOGGLE_TODO, task: json }))
      .catch((err) => dispatch({ type: FETCH_DATA_ERROR, msg: err }));
  };
}

export const removeTodo = (task) => {
  console.log(task);
  return (dispatch) => {
    return fetch("/api/task", {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(task), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: REMOVE_TODO, task: json }))
      .catch((err) => dispatch({ type: FETCH_DATA_ERROR, msg: err }));
  };
}

export const fetchData = () => {
  return (dispatch) => {
    return fetch("/api/task")
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCH_DATA_REQUEST, data: json }))
      .catch((err) => dispatch({ type: FETCH_DATA_ERROR, msg: err }));
  };
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
