import React, { useContext, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ContextState {
  todos: Todo[];
}

const initialState: ContextState = {
  todos: [],
  dispatch: React.dispatch
};

interface Action {
  type: TODO_TYPE;
  payload: Todo;
}

enum TODO_TYPE {
  ADD = "add",
  DELETE = "delete",
  UPDATE = "update",
  TOGGLE = "toggle",
}

function reducer(state: ContextState, action: Action) {
  switch (action.type) {
    case TODO_TYPE.ADD:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODO_TYPE.DELETE:
      const remainingTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: remainingTodos };
    case TODO_TYPE.UPDATE:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
      return { ...state, todos: updatedTodos };
    case TODO_TYPE.TOGGLE:
      const toggledTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          return action.payload;
        } else {
          return todo;
        }
      });
      return { ...state, todos: toggledTodos };
    default:
      return initialState;
  }
}

const GlobalContext = React.createContext<ContextState>(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={state}>
      <div>I'm parent</div>
      <button
        onClick={() => {
          dispatch({
            type: TODO_TYPE.ADD,
            payload: {
              id: 1,
              completed: false,
              title: "title1",
              userId: 1,
            },
          });
        }}
      >Add</button>
      <Child></Child>
    </GlobalContext.Provider>
  );
}

export default App;

function Child() {

  const {state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      I'm a child here
      <div>
      <button
        onClick={() => {
          dispatch({
            type: TODO_TYPE.DELETE,
            payload: {
              id: 1,
              completed: false,
              title: "title1",
              userId: 1,
            },
          });
        }}
      >DELETE</button>

      </div>
    </div>
  );
}

Child.contextType = GlobalContext;
