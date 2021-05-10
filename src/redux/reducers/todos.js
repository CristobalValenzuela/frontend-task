import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_DATA_REQUEST,
  FETCH_DATA_ERROR,
} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const task = action.task;
      return {
        ...state,
        allIds: [...state.allIds, task.id],
        byIds: {
          ...state.byIds,
          [task.id]: task,
        },
      };
    }
    case TOGGLE_TODO: {
      const task = action.task;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [task.id]: task,
        },
      };
    }
    case REMOVE_TODO: {
      const task = action.task;
      let byIds = state.byIds;
      delete byIds[task.id];
      let allIds = state.allIds.filter((t) => t !== task.id);
      return {
        byIds: byIds,
        allIds: allIds,
      };
    }
    case FETCH_DATA_REQUEST:
      let byIds = state.byIds;
      let allIds = state.allIds;
      action.data.forEach((dato) => {
        byIds[dato.id] = dato;
        allIds.push(dato.id);
      });
      return { byIds: byIds, allIds: allIds };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.msg };
    default:
      return state;
  }
}
