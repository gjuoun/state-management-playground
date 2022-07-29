import { AnyAction } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useAppDispatch } from "./config/hooks";
import {
  todoApi,
  useGetTodoQuery,
  useGetTodosQuery,
  useLazyGetTodosQuery,
} from "./config/todo.api";
import { Todo } from "./config/todo.slice";

export const App = () => {
  const [id, setId] = React.useState<number>(1);

  const { data: todosData } = useGetTodosQuery(undefined, {
    refetchOnMountOrArgChange: 100,
  });
  const { data: todoData } = useGetTodoQuery(id, {
    refetchOnMountOrArgChange: 100,
  });

  const dispatch = useAppDispatch();

  const [todo, setTodo] = React.useState<Todo | undefined>(undefined);
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const [getTodos, { data: newTodosData }] = useLazyGetTodosQuery(undefined);

  useEffect(() => {
    if (todoData) {
      console.log("todoData", todoData);
      setTodo(todoData);
    }

    if (todosData) {
      console.log("todosData", todosData);
      setTodos(todosData);
    }
  }, [todosData, todoData]);

  useEffect(() => {
    console.log("newTodosData", newTodosData);
  }, [newTodosData]);

  return (
    <div>
      hello
      <button
        onClick={() => {
          dispatch(todoApi.util.invalidateTags(["todos"]));
          dispatch(todoApi.util.invalidateTags([{ type: "todo", id: 1 }]));
        }}
      >
        invalidate todos
      </button>
      <button
        onClick={() => {
          const newTodo: Todo = {
            userId: 1,
            id: 2,
            title: "new todo",
            completed: false,
          };

          dispatch(
            todoApi.util.updateQueryData("getTodo", 1, (draft) => {
              console.log("draft", draft);
              Object.assign(draft, newTodo);
            }) as never
          );
        }}
      >
        update todo - 2 and todos
      </button>
      <button
        onClick={() => {
          getTodos();
        }}
      >
        refetch todos
      </button>
      <div>
        {todoData?.id} - {todoData?.title}
        todos length :{todosData?.length}
      </div>
    </div>
  );
};
