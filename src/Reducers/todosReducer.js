import { ADD_TASK, EDIT_TASK,TOGGLE_TASK,DELETE_TASK } from "../Constants/action-types";


const initialState = {
  todos: [
    {
      id: 1,
      task: "Climb Mountain Everest",
      isDone: false,
    },
    {
      id: 2,
      task: "Swim in the Great Barrier Reef",
      isDone: false,
    },
    {
      id: 3,
      task: "Go to Hawaii",
      isDone: false,
    },
    {
      id: 4,
      task: "Visit the great wall of china",
      isDone: false,
    },
  ],
};

export default function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK: {
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), task: payload.newTask, isDone: false },
        ],
      };
    }
    case TOGGLE_TASK: {
      return {
        todos: state.todos.map((task) =>
          task.id === payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    }
    case EDIT_TASK:
      return {
        ...state,todos:state.todos.map(todo=>todo.id===payload.id ? {...todo,task:payload.text}:todo)
      }
    case DELETE_TASK:
      return {
        ...state,todos:state.todos.filter(todo=>todo.id!==payload)
      }
    default:
      return state;
  }
}
